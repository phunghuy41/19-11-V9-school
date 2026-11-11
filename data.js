/* Nội dung 36 thư — trích nguyên văn từ tài liệu người dùng cung cấp.
   Chỉ loại bỏ dòng giờ/tên người gửi đứng ngoài nội dung thư ở mục 12 Tin. */
const HEART_DATA = {
  "10": [
    {
      "id": "10-anh-1",
      "name": "10 Anh 1",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "10-anh-2",
      "name": "10 Anh 2",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "10-địa",
      "name": "10 Địa",
      "specialty": "Địa lí"
    },
    {
      "id": "10-hóa",
      "name": "10 Hóa",
      "specialty": "Hóa học"
    },
    {
      "id": "10-lí",
      "name": "10 Lí",
      "specialty": "Vật lí"
    },
    {
      "id": "10-pháp",
      "name": "10 Pháp",
      "specialty": "Tiếng Pháp"
    },
    {
      "id": "10-sinh",
      "name": "10 Sinh",
      "specialty": "Sinh học"
    },
    {
      "id": "10-sử",
      "name": "10 Sử",
      "specialty": "Lịch sử"
    },
    {
      "id": "10-tin",
      "name": "10 Tin",
      "specialty": "Tin học"
    },
    {
      "id": "10-toán",
      "name": "10 Toán",
      "specialty": "Toán"
    },
    {
      "id": "10-trung",
      "name": "10 Trung",
      "specialty": "Tiếng Trung Quốc"
    },
    {
      "id": "10-văn",
      "name": "10 Văn",
      "specialty": "Ngữ văn"
    }
  ],
  "11": [
    {
      "id": "11-anh-1",
      "name": "11 Anh 1",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "11-anh-2",
      "name": "11 Anh 2",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "11-địa",
      "name": "11 Địa",
      "specialty": "Địa lí"
    },
    {
      "id": "11-hóa",
      "name": "11 Hóa",
      "specialty": "Hóa học"
    },
    {
      "id": "11-lí",
      "name": "11 Lí",
      "specialty": "Vật lí"
    },
    {
      "id": "11-pháp",
      "name": "11 Pháp",
      "specialty": "Tiếng Pháp"
    },
    {
      "id": "11-sinh",
      "name": "11 Sinh",
      "specialty": "Sinh học"
    },
    {
      "id": "11-sử",
      "name": "11 Sử",
      "specialty": "Lịch sử"
    },
    {
      "id": "11-tin",
      "name": "11 Tin",
      "specialty": "Tin học"
    },
    {
      "id": "11-toán",
      "name": "11 Toán",
      "specialty": "Toán"
    },
    {
      "id": "11-trung",
      "name": "11 Trung",
      "specialty": "Tiếng Trung Quốc"
    },
    {
      "id": "11-văn",
      "name": "11 Văn",
      "specialty": "Ngữ văn"
    }
  ],
  "12": [
    {
      "id": "12-anh-1",
      "name": "12 Anh 1",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "12-anh-2",
      "name": "12 Anh 2",
      "specialty": "Tiếng Anh"
    },
    {
      "id": "12-địa",
      "name": "12 Địa",
      "specialty": "Địa lí"
    },
    {
      "id": "12-hóa",
      "name": "12 Hóa",
      "specialty": "Hóa học"
    },
    {
      "id": "12-lí",
      "name": "12 Lí",
      "specialty": "Vật lí"
    },
    {
      "id": "12-pháp",
      "name": "12 Pháp",
      "specialty": "Tiếng Pháp"
    },
    {
      "id": "12-sinh",
      "name": "12 Sinh",
      "specialty": "Sinh học"
    },
    {
      "id": "12-sử",
      "name": "12 Sử",
      "specialty": "Lịch sử"
    },
    {
      "id": "12-toán",
      "name": "12 Toán",
      "specialty": "Toán"
    },
    {
      "id": "12-trung",
      "name": "12 Trung",
      "specialty": "Tiếng Trung Quốc"
    },
    {
      "id": "12-văn",
      "name": "12 Văn",
      "specialty": "Ngữ văn"
    },
    {
      "id": "12-tin",
      "name": "12 Tin",
      "specialty": "Tin học"
    }
  ]
};

const LETTER_CONTENT = {
  "10-anh-1": "Happy Men’s Day to the boys of Anh 1 – Khối 10! Nhân ngày 19/11, chúc các bạn luôn tự tin, vui vẻ và giữ được nguồn năng lượng tích cực trong mọi hành trình.Điều đáng trân trọng hơn cả, mong rằng những ngày tháng tại Chuyên Hạ Long sẽ mang đến cho các bạn thật nhiều trải nghiệm đáng nhớ, những người bạn tuyệt vời và vô vàn lý do để mỉm cười mỗi ngày nhéee💘",
  "10-anh-2": "To the boys of Class 10 English 2! Chúc các bạn có một ngày 19/11 thật nhiều tiếng cười và những điều bất ngờ đáng yêu. Chúng tớ hy vọng rằng các bạn sẽ luôn giữ được sự tự tin, tinh thần cởi mở và nét đáng yêu của tuổi trẻ. Mong rằng những năm tháng tại Chuyên Hạ Long sẽ trở thành một hành trình thật đẹp mà sau này ai cũng muốn nhớ về nhaaa❤️‍🔥❤️‍🔥",
  "10-địa": "Gửi những chàng trai Địa 10! Chúc các bạn một ngày 19/11 thật vui vẻ và ngập tràn những điều tốt đẹp. Mong rằng những năm tháng tại Chuyên Hạ Long sẽ mở ra cho các bạn nhiều chân trời mới, không chỉ trong học tập mà còn trong những trải nghiệm và tình bạn. Chúc các bạn luôn giữ được sự tò mò, tinh thần khám phá và đừng ngại thử sức với những điều mới mẻ. Hy vọng chúng ta sẽ cùng nhau có một quãng thanh xuân thật đẹp và hạnh phúc💗💗💗",
  "10-hóa": "Gửi những chàng trai chuyên Hoá 10\n• Nhân ngày 19/11, chúc các bạn luôn giữ được ngọn lửa nhiệt huyết của tuổi trẻ, luôn vui vẻ, tự tin và không ngừng khám phá những điều mới mẻ nha. Mong rằng những năm tháng dưới mái trường Chuyên sẽ trở thành khoảng thời gian thật đẹp, nơi các bạn có thêm nhiều người bạn tốt và những kỷ niệm đáng nhớ nheee💞",
  "10-lí": "Chúc những chàng trai 10 Lý một ngày 19/11 thật đáng nhớ! Mong các bạn luôn giữ được sự năng động, tinh thần ham khám phá và niềm yêu thích tìm hiểu thế giới xung quanh. Và hơn thế, chúc các bạn có thật nhiều niềm vui, những người bạn tốt và một khởi đầu thật tuyệt vời tại mái trường Chuyên Hạ Long nhaaaaa💝",
  "10-pháp": "Bonjour những chàng trai Pháp 10! Chúc các bạn có một ngày 19/11 thật vui vẻ và đáng nhớ. Mong rằng hành trình tại Chuyên Hạ Long sẽ mang đến cho các bạn nhiều trải nghiệm mới, những tình bạn đẹp và thật nhiều khoảnh khắc đáng yêu. Chúc các bạn luôn giữ được sự tự tin, tinh thần lạc quan và có một năm học thật nhiều niềm vui nhaaaa💗💗",
  "10-sinh": "Nhân ngày 19/11, chúc những chàng trai 10 Sinh luôn tràn đầy sức sống, nhiệt huyết và niềm vui! Chúng tớ mong rằng các bạn sẽ có một hành trình cấp ba thật đáng nhớ, được học hỏi những điều mới, gặp gỡ những người bạn tuyệt vời và cùng nhau tạo nên những kỷ niệm đẹp nhất của tuổi học trò nhaaaa💗",
  "10-sử": "Gửi các chàng trai Sử 10! Chúc các bạn có một ngày 19/11 thật ý nghĩa, luôn vui vẻ và tràn đầy năng lượng. Những năm tháng đầu tiên ở Chuyên Hạ Long chắc hẳn sẽ có không ít điều mới mẻ, nhưng cũng sẽ là khoảng thời gian để các bạn gặp gỡ những người bạn tuyệt vời và tạo nên những kỷ niệm riêng. Mong rằng mỗi ngày đến trường đều mang đến cho các bạn một điều đáng nhớ nhée💕💕",
  "10-tin": "Gửi những chàng trai Tin 10! Nhân ngày 19/11, chúc các bạn luôn giữ được sự năng động, sáng tạo và niềm đam mê khám phá những điều mới mẻ. Mong rằng bên cạnh những giờ học và những dòng code, các bạn sẽ có thật nhiều tiếng cười, những người bạn đồng hành tuyệt vời và một thanh xuân thật đáng nhớ tại Chuyên Hạ Long. Chúc các bạn luôn tự tin và hết mình với những điều mình yêu thích nhéee💗♥️",
  "10-toán": "Chúc những chàng trai của tập thể lớp 10 Toán sẽ có một ngày 19/11 thật vui vẻ và trọn vẹn! Mong rằng các bạn sẽ luôn giữ được sự hồn nhiên, tinh thần ham học hỏi và nụ cười tươi sáng của những ngày đầu cấp ba.Đặc biệt chúc các bạn không chỉ tìm được lời giải cho những bài toán khó mà còn tìm thấy thật nhiều niềm vui trong hành trình trưởng thành của mình nhaaa 💘",
  "10-trung": "Gửi những chàng trai Trung 10! Nhân ngày 19/11, chúc các bạn có một ngày thật vui và nhiều tiếng cười. Mong rằng những ngày đầu tiên tại Chuyên Hạ Long sẽ mang đến cho các bạn thật nhiều điều thú vị, những người bạn tốt và những kỷ niệm đẹp. Chúc các bạn luôn tự tin, giữ được sự nhiệt huyết và tận hưởng thật trọn vẹn quãng thời gian thanh xuân dưới mái trường này nheee💗💗💗",
  "10-văn": "Gửi chàng trai duy nhất của 10 Văn! Nhân ngày đặc biệt này, chúc chàng trai luôn giữ trong mình một trái tim ấm áp, một tâm hồn phong phú và sự chân thành trong từng điều nhỏ bé. Hơn cả mong rằng bạn sẽ có thật nhiều câu chuyện đẹp để kể, thật nhiều kỷ niệm đáng nhớ để viết nên những trang thanh xuân thật rực rỡ dưới mái trường Chuyên Hạ Long nheee💓",
  "11-anh-1": "Gửi tới các bạn nam lớp 11 Anh 1, wishing you a wonderful November 19th! Chúc các bạn luôn đủ bản lĩnh để theo đuổi ước mơ, đủ kiên trì để vượt qua khó khăn. Mong rằng các bạn sẽ luôn tự hào về chính mình và tận hưởng trọn vẹn những năm tháng tuổi trẻ đầy nhiệt huyết nhé!!💗💗😋😊😔🤘",
  "11-anh-2": "Chúc các chàng trai lớp 11 Anh 2 một ngày 19/11 thật hạnh phúc. Mong rằng các bạn sẽ không chỉ giỏi giang trong học tập mà còn luôn biết quan tâm, sẻ chia và trở thành điểm tựa tinh thần cho những người xung quanh. Chúc các bạn luôn được sống đúng với bản thân, được yêu thương và có thật nhiều niềm vui trong hành trình thanh xuân rực rỡ này nhé!!!💗💗🫶👌🤞💗",
  "11-địa": "Nhân ngày 19/11, Ban Phát thanh gửi lời chúc đến các chàng trai lớp 11 Địa! Chúc các bạn luôn vững vàng như những dãy núi, rộng mở như những đại dương và không ngừng tiến về phía trước . Mong các bạn sẽ luôn tìm thấy hướng đi của riêng mình, dù hành trình phía trước có đôi lúc có khó khăn hay nhiều thử thách!!💗💗🤓🤩😃🙈",
  "11-hóa": "Gửi các chàng trai lớp 11 Hóa Chúc các bạn luôn vững vàng trước những thử thách, đủ kiên trì để theo đuổi điều mình yêu thích và đủ lạc quan để mỉm cười trước những ngày không như ý. Mong rằng mỗi ngày trôi qua đều là những khoảng thời gian ý nghĩa nhất trong thanh xuân của các bạn!!💗💗🫠😇🏳️‍🌈🙈🥚💗",
  "11-lí": "Gửi các chàng trai lớp 11 Lí ! Chúc các bạn luôn giữ được nguồn năng lượng tích cực, sự kiên trì và tinh thần không ngại thử thách. Cuộc sống đôi khi chẳng vận hành theo những quy luật mà chúng ta mong muốn, nhưng hy vọng các bạn vẫn luôn đủ lạc quan để đón nhận mọi điều và đủ mạnh mẽ để vượt qua tất cả!!💗💗🥰😜🥳💗💗",
  "11-pháp": "Chúc các chàng trai lớp 11 Pháp luôn giữ được khí chất lịch thiệp, sự chỉn chu và tinh tế rất riêng. Chặng đường THPT đang bước vào giai đoạn tăng tốc, chúc các bạn luôn bền bỉ với mục tiêu, dám nghĩ dám làm và không ngừng khẳng định bản thân để trở thành những phiên bản rực rỡ nhất.🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "11-sinh": "Gửi những chàng trai lớp 11 Sinh ! Chúc các bạn luôn giữ được trái tim ấm áp, tinh thần lạc quan và sự bền bỉ trên hành trình trưởng thành. Giống như mỗi mầm cây cần thời gian để lớn lên, mong rằng các bạn cũng sẽ luôn kiên nhẫn với bản thân, không ngừng phát triển và trở thành phiên bản tốt nhất của chính mình!!💗💗🙈🤩🤯🤯💗",
  "11-sử": "Gửi những chàng trai 11 Sử Chúc các bạn luôn giữ được bản lĩnh, sự kiên trì, lòng nhiệt huyết trên hành trình theo đuổi những điều mình tin tưởng. Lịch sử lưu giữ những dấu mốc của thời gian, còn tuổi trẻ của các bạn đang từng ngày tạo nên những dấu ấn của riêng mình. Mong rằng những dấu ấn ấy sẽ luôn thật rực rỡ và thật đáng tự hào nhé!!💗💗😋🤯🥹💗🥚",
  "11-tin": "Chúc các nam sinh 11 Tin luôn giữ vững cái đầu lạnh và tư duy logic sắc bén. Mong rằng mọi bài toán khó, mọi dòng code phức tạp hay những áp lực học tập sắp tới đều sẽ được các bạn “giải mã” một cách mượt mà nhất. Hãy tiếp tục là những mảnh ghép thông minh, điềm tĩnh và là chỗ dựa công nghệ đáng tin cậy cho cả tập thể khối 11 🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "11-toán": "Gửi những chàng trai Toán 11! Chúc các bạn có một ngày 19/11 thật nhiều niềm vui. Mong rằng dù có phải đối mặt với những bài toán khó hay những ngày học tập bận rộn, các bạn vẫn luôn giữ được sự lạc quan, kiên trì và những nụ cười thường trực. Chúc các bạn không chỉ tìm được lời giải cho những bài toán trên lớp mà còn luôn tìm thấy niềm vui trong những điều giản dị của tuổi học trò nhée💗💗",
  "11-trung": "Chúc các bạn nam 11 Trung luôn giữ được tinh thần chí khí, sự tập trung và ý chí vươn lên mạnh mẽ. Ngoại ngữ là một hành trình dài đòi hỏi sự kiên trì, mong rằng các bạn sẽ luôn giữ vững phong độ, gặt hái thật nhiều điểm số ấn tượng và cùng lớp tạo nên một năm học khóa 11 thật đáng nhớ. Chỉ cần chăm chỉ, mọi nỗ lực sẽ được đền đáp “皇天不负有心人”.🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "11-văn": "Gửi chàng trai Văn 11! Nhân ngày 19/11, chúc bạn luôn vui vẻ, tự tin và giữ được sự chân thành, ấm áp của riêng mình. Mong rằng giữa những trang sách và câu chữ, bạn sẽ có thật nhiều câu chuyện đẹp để kể, những người bạn đáng quý để sẻ chia và những khoảnh khắc thật đáng nhớ. Chúc bạn luôn giữ được niềm yêu thích với những điều mình theo đuổi và viết nên một thanh xuân thật đẹp dưới mái trường Chuyên Hạ Long nhée💗💗",
  "12-anh-1": "Chúc các handsome boys lớp 12 Anh 1 luôn giữ trọn ngọn lửa nhiệt huyết, sự tự tin và tư duy rộng mở. Năm học cuối cùng dưới mái trường này là lúc để các bạn tỏa sáng và bứt phá giới hạn. Chúc các bạn làm chủ mọi kỳ thi quốc tế lẫn quốc gia, sẵn sàng vươn xa và để lại những kỷ niệm đẹp đẽ nhất cùng lớp.🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "12-anh-2": "Nhân ngày 19/11, chúc các chàng trai Anh 2 luôn giữ vững phong độ, tự tin và bản lĩnh trên mọi hành trình. Chúc các bạn không chỉ giỏi tiếng Anh mà còn giỏi chinh phục những mục tiêu của bản thân, luôn gặp nhiều may mắn, học tập thật tốt và có thật nhiều kỷ niệm đáng nhớ trong năm học cuối cấp nhee!! May your dreams come true and your future be filled with success and happiness!!🩷🩷🩷",
  "12-địa": "Chúc các chàng trai 12 Địa luôn vững vàng như núi, rộng mở như biển và không ngừng khám phá những chân trời mới! Mong rằng dù có đi đến bất cứ đâu, các bạn cũng luôn tìm thấy hướng đi phù hợp và chinh phục được những đỉnh cao của riêng mình. Chúc các bạn học tập thật tốt, gặp nhiều may mắn, luôn vui vẻ và có một năm cuối cấp trọn vẹn với thật nhiều kỷ niệm đẹp nhee!!🩷🩷🩷",
  "12-hóa": "Nhân ngày Quốc tế Nam giới 19/11, chúc các chàng trai 12 Hóa luôn tràn đầy năng lượng, nhiệt huyết và có thật nhiều niềm vui trong cuộc sống. Mong rằng mọi phản ứng trong cuộc đời đều tạo ra những kết quả tích cực, mọi khó khăn đều sớm được hóa giải và thành công sẽ luôn là sản phẩm cuối cùng. Chúc các bạn học tập thật tốt, luôn tự tin và có một năm cuối cấp thật đáng nhớ nhee!!🩷🩷🩷",
  "12-lí": "Chúc các chàng trai 12 Lí có một ngày 19/11 thật vui vẻ và ý nghĩa! Mong rằng các bạn luôn giữ được sự thông minh, nhanh nhạy và tinh thần ham học hỏi của mình. Chúc mọi bài toán khó đều tìm được lời giải, mọi thử thách đều có cách vượt qua và mọi dự định đều đạt được kết quả như mong muốn. Đặc biệt, chúc các bạn luôn giữ vững phong độ và bứt phá trong chặng đường cuối cấp nhee!!🩷🩷🩷",
  "12-pháp": "Chúc các chàng trai 12 Pháp có một ngày 19/11 thật vui vẻ và ngập tràn tiếng cười! Mong rằng các bạn luôn giữ được sự tự tin, phong thái lịch lãm và tinh thần lạc quan của mình. Chúc các bạn học tập thuận lợi, sớm chinh phục những mục tiêu đã đặt ra và luôn gặp được những điều tốt đẹp trên hành trình phía trước nhee!! Que votre avenir soit rempli de bonheur, de réussite et de belles surprises !🩷🩷🩷",
  "12-sinh": "Chúc các chàng trai 12 Sinh luôn khỏe mạnh, vui vẻ và tràn đầy sức sống! Mong rằng mỗi ngày trôi qua đều là một cơ hội để các bạn trưởng thành, phát triển và khám phá những điều mới mẻ. Chúc các bạn luôn giữ được sự nhiệt huyết, đạt được những thành tích đáng tự hào và có thật nhiều trải nghiệm đẹp trong những tháng ngày cuối cùng của thời học sinh nhee!!🩷🩷🩷",
  "12-sử": "Nhân ngày 19/11, chúc các chàng trai 12 Sử luôn vui vẻ, tự tin và giữ vững phong độ trong học tập cũng như cuộc sống. Mong rằng các bạn sẽ luôn giữ được sự nhiệt huyết, tinh thần trách nhiệm và bản lĩnh của mình trước mọi thử thách. Chúc các bạn có một năm học cuối cấp thật trọn vẹn, đạt được kết quả như mong đợi và lưu giữ thật nhiều kỷ niệm đẹp bên thầy cô, bạn bè. Hy vọng rằng chặng đường phía trước sẽ mở ra nhiều cơ hội mới và những trải nghiệm thú vị nhee!!🩷🩷🩷",
  "12-toán": "Chúc những bộ óc nhạy bén của 12 Toán luôn giữ vững sự tinh anh, tư duy mạch lạc và tinh thần kỷ luật cao độ. Giữa những công thức và bài toán hóc búa của năm lớp 12, chúc các bạn luôn tìm ra “nghiệm số” tối ưu nhất cho ước mơ của chính mình, cùng tập thể lớp tự tin bứt phá và cán đích trọn vẹn.🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "12-trung": "Đứng trước ngưỡng cửa quan trọng nhất của tuổi học trò, chúc các “帅哥“ 12 Trung luôn giữ được sự điềm tĩnh và bản lĩnh kiên cường. Mong các bạn sẽ vượt qua từng kỳ thi đánh giá, từng cột mốc HSK，CSCA hay kỳ thi Tốt nghiệp một cách xuất sắc nhất. Hãy luôn là chỗ dựa tinh thần vững chắc cho các “美女“ trong những ngày tháng cuối cấp này nhé!🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "12-văn": "Chúc chàng trai hiếm hoi nhưng vô cùng đặc biệt của 12 Văn luôn giữ được nét sâu sắc, ấm áp trong tâm hồn và sự vững vàng, trách nhiệm trong hành động. Càng về cuối chặng đường cấp 3, mong bạn càng thể hiện rõ bản lĩnh ngầm của mình – luôn kiên định trước áp lực và là lá chắn tinh thần đầy tin cậy cho tập thể.🩷❤️🧡💛💚🩵💙💜🖤🩶🤍🤎",
  "12-tin": "Chúc các chàng trai 12 Tin luôn giữ vững phong độ, tư duy sắc bén, code đâu trúng đó, bug nào cũng fix được. Chúc các bạn có một ngày 19/11 thật vui vẻ và tương lai luôn chạy mượt, không bao giờ gặp lỗi nhee🩷🩷🩷"
};

const MEDIA_ITEMS = [];
