(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const gradeKeys = ['10', '11', '12'];
  const heartData = typeof HEART_DATA !== 'undefined' ? HEART_DATA : {};
  const letterContent = typeof LETTER_CONTENT !== 'undefined' ? LETTER_CONTENT : {};
  const letters = gradeKeys.flatMap(grade => (heartData[grade] || []).map((entry, index) => ({
    ...entry,
    grade,
    index,
    title: entry.name || entry.id,
    content: letterContent[entry.id] || ''
  })));
  const state = {
    grade: 'all',
    query: '',
    sound: true,
    typing: false,
    selectedFeedback: null
  };
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reducedMotion = reducedMotionQuery.matches;
  const TYPE_DELAY = 34;
  let typingTimer = 0;
  let typingToken = 0;
  let toastTimer = 0;
  let audioContext = null;
  let activeTypingRun = null;
  let activeLetter = null;
  let lastFocusTarget = null;
  let youtubeApiPromise = null;
  let youtubePlayer = null;

  function normalize(value) {
    return String(value ?? '').toLocaleLowerCase('vi').normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  }

  function splitText(text) {
    if (window.Intl && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('vi', { granularity: 'grapheme' });
      return [...segmenter.segment(text)].map(part => part.segment);
    }
    return Array.from(text);
  }

  function filteredLetters() {
    const query = normalize(state.query);
    return letters.filter(item => {
      const matchesGrade = state.grade === 'all' || item.grade === state.grade;
      const searchable = normalize(`${item.title} ${item.specialty || ''} khoi ${item.grade}`);
      return matchesGrade && (!query || searchable.includes(query));
    });
  }

  function showToast(message) {
    const element = $('#toast');
    if (!element) return;
    element.textContent = message;
    element.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => element.classList.remove('show'), 2300);
  }

  function renderHearts() {
    const grid = $('#heartCanvas');
    if (!grid) return;
    const items = filteredLetters();
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `heart-node grade-${item.grade}`;
      button.dataset.id = item.id;
      button.setAttribute('aria-label', `Mở thư ${item.title}, khối ${item.grade}`);

      const glyph = document.createElement('span');
      glyph.className = 'heart-glyph';
      glyph.setAttribute('aria-hidden', 'true');

      const name = document.createElement('span');
      name.className = 'node-name';
      name.textContent = item.title;

      const meta = document.createElement('span');
      meta.className = 'node-meta';
      meta.textContent = `KHỐI ${item.grade} · ${(item.specialty || '').toLocaleUpperCase('vi')}`;

      button.append(glyph, name, meta);
      fragment.append(button);
    });

    grid.replaceChildren(fragment);
    $('#searchEmpty').hidden = items.length > 0;
    $('#resultCount').textContent = `${items.length} lớp`;

    const mark = $('.status-mark');
    mark.className = `status-mark${state.grade === 'all' ? '' : ` g${state.grade}`}`;
    $('#gradeTitle').textContent = state.grade === 'all' ? '36 trái tim' : `12 trái tim · Khối ${state.grade}`;
    $('#gradeSubtitle').textContent = state.grade === 'all'
      ? 'Ba khối · Một vườn lời chúc'
      : `Sắc màu riêng của khối ${state.grade}`;
  }

  function updateGradeTabs(selectedGrade) {
    $$('.grade-tab').forEach(button => {
      const selected = button.dataset.grade === selectedGrade;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function updateTypingControls(status, canSkip = false) {
    $('#typingStatus').textContent = status;
    $('#showFullLetter').hidden = !canSkip;
  }

  function stopTyping() {
    typingToken += 1;
    window.clearTimeout(typingTimer);
    typingTimer = 0;
    activeTypingRun = null;
    state.typing = false;
  }

  function prepareAudio() {
    if (!state.sound || reducedMotion) return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioContext) audioContext = new AudioContextClass();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    } catch (error) {
      // Audio is optional; the typewriter remains available without it.
    }
  }

  function playKeySound() {
    if (!state.sound || document.hidden || reducedMotion) return;
    try {
      prepareAudio();
      if (!audioContext) return;
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(560 + Math.random() * 100, now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.011, now + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.026);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 0.028);
    } catch (error) {
      // The letter continues normally if Web Audio is unavailable or blocked.
    }
  }

  function finishTyping(status = 'Lá thư đã sẵn sàng.') {
    if (!activeLetter) return;
    stopTyping();
    $('#dialogCopy').textContent = activeLetter.content;
    updateTypingControls(status, false);
  }

  function typeLetter(text) {
    stopTyping();
    const target = $('#dialogCopy');
    target.replaceChildren();

    if (reducedMotion || !text) {
      target.textContent = text;
      updateTypingControls(text ? 'Lá thư đã sẵn sàng.' : 'Lá thư đang được cập nhật.', false);
      return;
    }

    const segments = splitText(text);
    const textNode = document.createTextNode('');
    target.append(textNode);
    const run = { segments, index: 0, token: typingToken, textNode, soundCounter: 0, tick: null };
    activeTypingRun = run;
    state.typing = true;
    updateTypingControls('Đang viết thư cho cậu…', true);

    run.tick = () => {
      if (run.token !== typingToken || !$('#letterDialog').open || activeTypingRun !== run) return;
      if (document.hidden) {
        typingTimer = 0;
        return;
      }
      if (run.index >= run.segments.length) {
        state.typing = false;
        activeTypingRun = null;
        typingTimer = 0;
        updateTypingControls('Lá thư đã sẵn sàng.', false);
        return;
      }

      const segment = run.segments[run.index++];
      textNode.appendData(segment);
      if (!/^\s+$/u.test(segment)) {
        run.soundCounter += 1;
        if (run.soundCounter % 3 === 0) playKeySound();
      }

      const delay = TYPE_DELAY + (/[.!?。！？]/u.test(segment) ? 250
        : /[,;:，；：]/u.test(segment) ? 115
        : /\n/u.test(segment) ? 150 : 0);
      typingTimer = window.setTimeout(run.tick, delay);
    };

    typingTimer = window.setTimeout(run.tick, 320);
  }

  function resetFeedback() {
    state.selectedFeedback = null;
    $$('.feedback-options button').forEach(button => {
      button.classList.remove('selected');
      button.setAttribute('aria-pressed', 'false');
    });
    const thanks = $('#feedbackThanks');
    thanks.textContent = '';
    thanks.classList.remove('feedback-thanks-show');
  }

  function updateSoundButton() {
    const button = $('#soundToggle');
    button.hidden = reducedMotion;
    button.setAttribute('aria-pressed', String(state.sound));
    button.setAttribute('aria-label', state.sound ? 'Tắt âm thanh gõ' : 'Bật âm thanh gõ');
    button.textContent = state.sound ? '♫ Âm thanh bật' : '♫ Âm thanh tắt';
  }

  function openLetter(item, trigger = null) {
    stopTyping();
    activeLetter = item;
    lastFocusTarget = trigger || document.activeElement;
    resetFeedback();
    prepareAudio();

    const dialog = $('#letterDialog');
    dialog.className = `letter-dialog grade-${item.grade}`;
    $('#dialogGrade').textContent = `KHỐI ${item.grade} · ${(item.specialty || '').toLocaleUpperCase('vi')}`;
    $('#dialogTitle').textContent = item.title;
    $('#dialogCopy').textContent = '';
    updateSoundButton();

    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    typeLetter(item.content || '');
  }

  function closeLetter() {
    stopTyping();
    const dialog = $('#letterDialog');
    if (dialog.open) dialog.close();
  }

  $('#closeDialog').addEventListener('click', closeLetter);
  $('#letterDialog').addEventListener('close', () => {
    stopTyping();
    if (lastFocusTarget && lastFocusTarget.isConnected && typeof lastFocusTarget.focus === 'function') {
      lastFocusTarget.focus({ preventScroll: true });
    } else {
      $('#heartSearch').focus({ preventScroll: true });
    }
  });
  $('#letterDialog').addEventListener('click', event => {
    if (event.target === $('#letterDialog')) closeLetter();
  });
  $('#showFullLetter').addEventListener('click', () => finishTyping('Đã hiển thị toàn bộ lá thư.'));
  $('#soundToggle').addEventListener('click', () => {
    state.sound = !state.sound;
    updateSoundButton();
    if (state.sound) playKeySound();
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden && activeTypingRun && typingTimer) {
      window.clearTimeout(typingTimer);
      typingTimer = 0;
    } else if (!document.hidden && activeTypingRun && !typingTimer) {
      typingTimer = window.setTimeout(activeTypingRun.tick, 90);
    }
  });

  const reactionReplies = [
    'Một lựa chọn thật dễ thương. Cảm ơn cậu nha ♡',
    'Một lời cảm ơn thật xinh. Cảm ơn cậu nha ✦',
    'Cảm giác được quan tâm thật ấm áp ☀'
  ];
  $$('.feedback-options button').forEach((button, index) => {
    button.addEventListener('click', () => {
      state.selectedFeedback = button.dataset.feedback;
      $$('.feedback-options button').forEach(candidate => {
        const selected = candidate === button;
        candidate.classList.toggle('selected', selected);
        candidate.setAttribute('aria-pressed', String(selected));
      });
      const thanks = $('#feedbackThanks');
      thanks.textContent = reactionReplies[index];
      thanks.classList.remove('feedback-thanks-show');
      window.requestAnimationFrame(() => thanks.classList.add('feedback-thanks-show'));
    });
  });

  $('#heartCanvas').addEventListener('click', event => {
    const button = event.target.closest('.heart-node');
    if (!button) return;
    const item = letters.find(letter => letter.id === button.dataset.id);
    if (item) openLetter(item, button);
  });

  $$('.grade-tab').forEach(button => button.addEventListener('click', () => {
    state.grade = button.dataset.grade;
    updateGradeTabs(state.grade);
    renderHearts();
  }));

  $('#heartSearch').addEventListener('input', event => {
    state.query = event.target.value.trim();
    $('#clearSearch').hidden = !state.query;
    renderHearts();
  });
  $('#clearSearch').addEventListener('click', () => {
    $('#heartSearch').value = '';
    state.query = '';
    $('#clearSearch').hidden = true;
    renderHearts();
    $('#heartSearch').focus();
  });
  $('#randomLetter').addEventListener('click', () => {
    const options = filteredLetters();
    if (!options.length) return showToast('Chưa tìm thấy lớp phù hợp.');
    const chosen = options[Math.floor(Math.random() * options.length)];
    openLetter(chosen, $('#randomLetter'));
  });

  const originalInvite = {
    copy: 'Bộ phim là nơi lưu giữ những khoảnh khắc. Còn những lời nhắn nhỏ đang đợi cậu ở khu vườn phía dưới.',
    action: 'Khám phá 36 lá thư'
  };

  function resetFilmInvite() {
    $('#filmInviteCopy').textContent = originalInvite.copy;
    $('#filmInviteAction').textContent = originalInvite.action;
  }

  function finishFilmInvite() {
    $('#filmInviteCopy').textContent = 'Thước phim khép lại, nhưng những lời nhắn vẫn còn ở phía trước. Chạm xuống khu vườn để mở một trái tim nhé.';
    $('#filmInviteAction').textContent = 'Mở khu vườn lời nhắn';
  }

  function youtubeIdFromUrl(value) {
    try {
      const url = new URL(value, window.location.href);
      const host = url.hostname.replace(/^www\./, '').toLowerCase();
      if (host === 'youtu.be') return url.pathname.split('/').filter(Boolean)[0] || null;
      if (!['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) return null;
      if (url.pathname === '/watch') return url.searchParams.get('v');
      const match = url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]{6,})/);
      return match ? match[1] : null;
    } catch (error) {
      return null;
    }
  }

  function loadYouTubeApi() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (youtubeApiPromise) return youtubeApiPromise;

    youtubeApiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousReady === 'function') previousReady();
        if (window.YT && window.YT.Player) resolve(window.YT);
        else reject(new Error('YouTube API did not initialize'));
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.dataset.youtubeApi = 'true';
      script.onerror = () => reject(new Error('Could not load YouTube API'));
      document.head.append(script);
    });
    return youtubeApiPromise;
  }

  function revealVideo(message, playerType = 'local') {
    $('#memoryEmpty').hidden = true;
    $('#memoryPlayer').hidden = playerType !== 'local';
    $('#youtubePlayer').hidden = playerType !== 'youtube';
    $('#mediaMeta').textContent = message;
  }

  function showVideoFallback(message) {
    $('#memoryPlayer').hidden = true;
    $('#youtubePlayer').hidden = true;
    $('#memoryEmpty').hidden = false;
    $('#mediaMeta').textContent = message;
  }

  async function configureYouTube(videoId) {
    const container = $('#youtubePlayer');
    container.hidden = false;
    try {
      const YT = await loadYouTubeApi();
      youtubePlayer = new YT.Player('youtubePlayer', {
        width: '100%',
        height: '100%',
        videoId,
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          ...(window.location.origin && window.location.origin !== 'null' ? { origin: window.location.origin } : {})
        },
        events: {
          onReady: () => revealVideo('Video lưu trữ trên YouTube · Có thể phát trực tiếp tại đây.', 'youtube'),
          onStateChange: event => {
            if (event.data === 1) resetFilmInvite();
            if (event.data === 0) finishFilmInvite();
          },
          onError: () => {
            showVideoFallback('Không tải được video YouTube. Hãy kiểm tra đường link hoặc quyền nhúng.');
            showToast('Video chưa thể phát. Bạn hãy kiểm tra cài đặt nhúng trên YouTube nhé.');
          }
        }
      });
    } catch (error) {
      showVideoFallback('Không kết nối được YouTube. Vui lòng kiểm tra đường link video.');
      showToast('Không tải được trình phát YouTube.');
    }
  }

  function configureMedia() {
    const stage = $('#memoryStage');
    const video = $('#memoryPlayer');
    const configuredUrl = (stage.dataset.videoUrl || '').trim();
    const poster = (stage.dataset.videoPoster || '').trim();
    if (poster) video.poster = poster;

    video.addEventListener('loadeddata', () => revealVideo('Video kỷ niệm · Chuyên Hạ Long 19.11.'));
    video.addEventListener('play', resetFilmInvite);
    video.addEventListener('ended', finishFilmInvite);
    video.addEventListener('error', () => {
      if (video.hasAttribute('src') || video.querySelector('source')) {
        showVideoFallback('Video chưa tải được. Vui lòng kiểm tra lại tệp hoặc đường dẫn.');
        showToast('Video chưa tải được. Hãy kiểm tra lại tệp video nhé.');
      }
    });

    if (!configuredUrl) {
      // Local MP4 can also be added as a <source> inside #memoryPlayer.
      if (video.querySelector('source')) video.load();
      return;
    }

    const youtubeId = youtubeIdFromUrl(configuredUrl);
    if (youtubeId) {
      configureYouTube(youtubeId);
      return;
    }

    try {
      const parsed = new URL(configuredUrl, window.location.href);
      if (!['http:', 'https:', 'file:'].includes(parsed.protocol)) throw new Error('Unsupported video URL');
      video.src = configuredUrl;
      video.load();
    } catch (error) {
      showVideoFallback('Đường dẫn video chưa đúng định dạng.');
      showToast('Hãy dùng link YouTube hoặc đường dẫn MP4 hợp lệ.');
    }
  }

  const reducedMotionChanged = event => {
    reducedMotion = event.matches;
    if (reducedMotion && activeTypingRun) finishTyping('Lá thư đã sẵn sàng.');
    updateSoundButton();
  };
  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', reducedMotionChanged);
  } else if (typeof reducedMotionQuery.addListener === 'function') {
    reducedMotionQuery.addListener(reducedMotionChanged);
  }

  $$('.mobile-dock a').forEach(link => link.addEventListener('click', () => {
    if (document.activeElement === $('#heartSearch')) $('#heartSearch').blur();
  }));

  const missingLetters = letters.filter(item => !item.content.trim());
  if (letters.length !== 36 || missingLetters.length) {
    console.warn('19.11 content check:', {
      classes: letters.length,
      missingLetters: missingLetters.map(item => item.id)
    });
  }

  configureMedia();
  renderHearts();
  updateSoundButton();
})();
