---
title: "Giới thiệu về Privacy Magic"
description: "Tiện ích Chrome để bảo vệ quyền riêng tư của bạn"
backToTop: "↑ Về đầu trang"
---

Làm sao chúng ta, những người bình thường, có thể tự bảo vệ mình khỏi giám sát hàng loạt? Tôi đã làm việc với vấn đề này theo cách này hay cách khác hơn một thập kỷ. Trong thời gian đó, tôi đã làm việc trên ba trình duyệt web hướng đến quyền riêng tư: Tor Browser, Firefox và Brave. Hàng triệu người sử dụng các trình duyệt web này mỗi ngày và được bảo vệ, ít nhất ở một mức độ nào đó, khỏi việc theo dõi trực tuyến.

Nhưng dù đã có một số tiến bộ trong việc cải thiện quyền riêng tư của chúng, các trình duyệt chuyên biệt này khó có khả năng chiếm được phần lớn thị phần trình duyệt. Thực tế là hầu hết mọi người vẫn chọn dùng trình duyệt phổ thông, khiến họ gần như không được bảo vệ khỏi giám sát.

Việc chọn một trình duyệt phổ thông là điều dễ hiểu! Chrome và Edge được cài sẵn trên hầu hết máy tính và mang lại hiệu năng mạnh. Trên máy tính để bàn, gần 90% người dùng dùng trình duyệt phổ thông dựa trên Chromium. Nhược điểm là các trình duyệt này rò rỉ rất nhiều thông tin riêng tư.

Trình duyệt rò rỉ (và phần mềm rò rỉ khác) khiến tập đoàn và chính phủ dễ dàng theo dõi mọi người. Các tổ chức đang thu thập thông tin chi tiết về từng người bằng dữ liệu họ lấy từ việc sử dụng internet của bạn. Theo tôi, giám sát hàng loạt này là mối đe dọa đối với dân chủ và đối với sự sống của con người.

Vậy chúng ta có thể làm gì cho những người muốn bảo vệ quyền riêng tư nhưng cũng muốn tiếp tục dùng trình duyệt Chrome? Chúng ta cần một giải pháp dễ cài đặt, dễ sử dụng và bảo vệ quyền riêng tư của bạn, nhưng không làm giảm trải nghiệm duyệt web hay hạn chế quyền tự do dùng Web theo cách bạn muốn. Nói cách khác, nó cần hoạt động như “phép màu”.

Tôi nhận ra rằng một tiện ích trình duyệt được thiết kế cẩn thận có thể đáp ứng được. Chrome Web Store đã cung cấp hàng nghìn tiện ích làm rất nhiều việc khác nhau, bao gồm chặn quảng cáo hoặc ngăn một số kiểu rò rỉ thông tin riêng tư. Nhưng không có tiện ích nào cung cấp một bộ bảo vệ quyền riêng tư *toàn diện* giải quyết nhiều cách mà quyền riêng tư trực tuyến của bạn có thể bị xâm phạm.

Để thực hiện ý tưởng này, tôi đã tạo Privacy Magic, một tiện ích bảo vệ quyền riêng tư trình duyệt kiểu “cài rồi quên”. Xây dựng Privacy Magic không phải việc nhỏ: nói thật thì trình duyệt web phổ thông rò rỉ như cái rây. Để cái rây không chìm, bạn phải bịt hết mọi lỗ. Privacy Magic cố gắng làm điều đó bằng cách bao gồm nhiều lớp bảo vệ đa dạng, hầu hết được xây dựng từ đầu cho tiện ích này, và tất cả đều được bật theo mặc định.

Các biện pháp bảo vệ này bao gồm tự động chặn quảng cáo và trình theo dõi (tương tự trình chặn quảng cáo, nhưng đồng nhất với mọi người dùng), chống lấy dấu vân tay (chặn mọi kiểu rò rỉ thông tin về thiết bị của bạn), chặn breadcrumbs (để trang web không thể “gắn thẻ” trình duyệt của bạn), bịt các lỗ rò của trình duyệt web (củng cố những thứ như iframe và web workers), chặn cookie bên thứ ba, tắt các tính năng chống riêng tư trong trình duyệt (như cái gọi là Ad Measurement), và bật Global Privacy Control (một thông điệp yêu cầu trang web không bán dữ liệu của bạn).

Tất cả các biện pháp bảo vệ quyền riêng tư này được thiết kế để tránh làm gián đoạn việc duyệt web của bạn. Nhưng nếu tình cờ bạn gặp một trang web không hoạt động với Privacy Magic ngay từ đầu, bạn có thể tắt bảo vệ chỉ trên trang đó bằng cách nhấp vào nút <span class="post-inline-logo" aria-hidden="true"><img src="/images/logo.svg" alt=""></span> và tắt đi.

Ngoài các biện pháp bảo vệ trong trình duyệt mà Privacy Magic cung cấp, việc giữ địa chỉ IP của bạn an toàn khỏi những ánh mắt tò mò cũng rất cần thiết. Trong quá trình cài đặt, tiện ích cung cấp cho bạn liên kết tới các VPN được Privacy Guides khuyến nghị, giúp ẩn địa chỉ IP của bạn khỏi các trang web và trình theo dõi nhúng.

Tôi vui khi nói rằng các biện pháp bảo vệ quyền riêng tư của Privacy Magic rất kỹ lưỡng và, theo hiểu biết của tôi, vượt xa đáng kể các biện pháp bảo vệ mà bất kỳ tiện ích Chrome nào khác cung cấp. Tôi quyết tâm tiếp tục thắt chặt và mở rộng bộ bảo vệ quyền riêng tư để mang lại giải pháp “chỉ cần hoạt động”. Và tôi cũng dự định hỗ trợ các trình duyệt khác, cả trên máy tính để bàn lẫn di động trong tương lai.

Giám sát hàng loạt sẽ không bị chặn bởi các công cụ chuyên biệt: chúng ta cần trao cho *tất cả* mọi người các công cụ họ cần để tự bảo vệ. Thuốc giải cho giám sát hàng loạt là bảo vệ hàng loạt. Tôi hy vọng Privacy Magic sẽ là một đóng góp quan trọng cho nỗ lực này.

Hãy thử Privacy Magic! Bạn có thể dễ dàng [cài đặt miễn phí](https://chromewebstore.google.com/detail/privacy-magic/cobojehlalmfnplnblndhofhgeglljkc) trên Chrome (và cũng dễ gỡ nếu nó không phù hợp với bạn). Hãy cho tôi biết về trải nghiệm của bạn; phản hồi rất cần thiết để tôi liên tục cải thiện tiện ích. Nếu bạn thích, hãy cân nhắc giúp người thân và bạn bè thử trên máy tính của họ.

Hướng tới một tương lai nơi quyền riêng tư — một quyền con người — có sẵn cho mọi người!
