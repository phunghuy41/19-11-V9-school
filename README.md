# 19.11 — Chuyên Hạ Long · V9 Editorial Yearbook

Website kỷ niệm ngày 19.11 với 36 lá thư đại diện cho 36 lớp.

## Định hướng thiết kế V9

**Editorial Yearbook — cuốn kỷ yếu mở.** Giao diện bớt hiệu ứng vũ trụ và kính mờ, dùng bố cục biên tập, nền xanh trời `#D1E8FC`, bề mặt giấy sáng, chữ navy dễ đọc và các chi tiết như dấu trang/kỷ yếu. Video được đặt làm trọng tâm ở desktop; trên điện thoại video xuất hiện trước và chiếm toàn bộ chiều rộng.

## Những gì được giữ nguyên

- `data.js` được giữ nguyên byte-for-byte từ gói V8/V6.5.
- Giữ đủ 36 lớp: 12 lớp khối 10, 12 lớp khối 11, 12 lớp khối 12.
- Không viết lại, rút gọn hoặc tự sửa nội dung 36 lá thư.
- Giữ cách thể hiện trái tim nổi, màu nhận diện: khối 10 Cyan, khối 11 Emerald, khối 12 Champagne Gold.
- Giữ câu hỏi phản hồi và đúng ba lựa chọn:
  - ♡ Dễ thương xỉuu
  - ✦ Cảm ơn các bạn nữ nhiều nhaa
  - ☀ Được quan tâm thế này thích ghê

## Cách thêm video để mọi người xem được

### Cách 1 — YouTube (đề xuất nếu đăng web cho đông người)

1. Tải video lên YouTube bằng tài khoản của ban tổ chức.
2. Chọn **Công khai** hoặc **Không công khai**. Với website kỷ niệm, Không công khai cho phép người có link website xem mà không cần đăng nhập, nhưng link video vẫn có thể được chia sẻ tiếp.
3. Đảm bảo video cho phép nhúng (embedding).
4. Mở `index.html`, tìm phần:

   ```html
   <div class="film-stage" id="memoryStage" data-video-url="" data-video-poster="">
   ```

5. Dán đường link YouTube vào `data-video-url`, ví dụ:

   ```html
   <div class="film-stage" id="memoryStage" data-video-url="https://youtu.be/VIDEO_ID" data-video-poster="">
   ```

   Có thể dùng link `youtu.be`, link `youtube.com/watch?v=...`, hoặc đường dẫn `/embed/VIDEO_ID`.

V9 tự nhận diện YouTube và mở trình phát nhúng. Khi video kết thúc, câu mời khám phá vườn thư sẽ đổi sang lời dẫn tiếp theo. Trình phát cần kết nối Internet.

### Cách 2 — Tệp MP4 tự lưu trữ

Đặt video trong thư mục `media/`, sau đó sửa `index.html`:

```html
<video id="memoryPlayer" controls playsinline preload="metadata" hidden aria-label="Thước phim kỷ niệm ngày 19 tháng 11">
  <source src="media/ten-video.mp4" type="video/mp4">
</video>
```

Hoặc điền đường dẫn MP4 vào `data-video-url`. Khi dùng cách này, hãy lưu ý băng thông hosting và dung lượng video; nhiều người xem cùng lúc có thể làm máy chủ chậm.

## Chạy thử

1. Giải nén ZIP.
2. Mở `index.html` bằng Chrome, Edge, Safari hoặc Firefox hiện đại.
3. Để dùng video YouTube, máy cần kết nối Internet.
4. Đưa toàn bộ thư mục lên hosting HTTPS để chia sẻ bằng một đường link.

## Những điểm đã chỉnh về code

- Dùng event delegation cho 36 trái tim, giảm số listener riêng lẻ.
- Bộ gõ chữ thêm ký tự vào một text node thay vì dựng lại toàn bộ chuỗi sau mỗi ký tự; hỗ trợ cụm ký tự Unicode/emoji bằng `Intl.Segmenter` khi có.
- Chuẩn bị Web Audio ngay trong thao tác mở thư để tăng khả năng âm thanh hoạt động trên trình duyệt di động.
- Bỏ thao tác vuốt xuống tự đóng thư để tránh đóng nhầm khi người đọc đang cuộn.
- Trạng thái giảm chuyển động được theo dõi khi người dùng đổi cài đặt; tắt đánh máy/âm thanh khi bật chế độ này.
- Có quản lý trạng thái video, lỗi video, YouTube nhúng và lời mời sau khi xem xong.
- Tìm kiếm không phân biệt dấu; lọc khối, chọn ngẫu nhiên, trạng thái bàn phím và trả focus sau khi đóng thư.
- Không dùng backend: reaction chỉ thay đổi giao diện trên máy của người xem, chưa được ghi nhận tập trung.

## Trước khi công bố chính thức

- Thay link YouTube hoặc thêm MP4 chính thức.
- Kiểm tra nội dung, chính tả và quyền sử dụng video/hình ảnh của học sinh.
- Thử lại trên iPhone/Safari và Android/Chrome thật, đặc biệt âm thanh và video nhúng.
- Nếu cần tổng hợp reaction, cần kết nối backend và thông báo rõ dữ liệu được thu thập.
