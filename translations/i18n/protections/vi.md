---
title: "Bảo vệ: vá các lỗ hổng trong trình duyệt của bạn"
description: Cách Privacy Magic bảo vệ quyền riêng tư của bạn khi duyệt web
backToTop: "↑ Về đầu trang"
---

Privacy Magic là một tiện ích mã nguồn mở cho Chrome, bảo vệ toàn diện quyền riêng tư của bạn khi duyệt web. Trình duyệt rất dễ bị rò rỉ thông tin, vì vậy Privacy Magic cung cấp nhiều lớp bảo vệ, bao gồm [chặn quảng cáo và trình theo dõi](#blocking-ads-and-trackers), [bảo vệ thông tin hệ thống](#protecting-system-information-fingerprinting), [xóa dấu vết theo dõi](#removing-tracking-breadcrumbs), [ngăn chặn rò rỉ web](#stopping-web-leaks), [gửi tín hiệu quyền riêng tư](#privacy-signals) và [áp dụng các biện pháp bảo vệ trình duyệt](#browser-protections).

## Chặn quảng cáo và trình theo dõi {#blocking-ads-and-trackers}

Trên khắp web, quảng cáo, tập lệnh theo dõi và pixel theo dõi đang bám theo bạn mà không có sự đồng ý của bạn bằng nhiều phương pháp vô hình.

Privacy Magic sử dụng các danh sách lọc phổ biến để chặn nhiều quảng cáo và trình theo dõi khỏi việc được trình duyệt của bạn yêu cầu trên mạng. Các danh sách lọc cũng ẩn các hộp trống còn lại khi quảng cáo bị chặn trên trang web. Privacy Magic sử dụng phiên bản cố định của các danh sách lọc này để hành vi chặn của tiện ích hoàn toàn có thể tái tạo và giống nhau đối với mọi người dùng.

| Danh sách lọc | Mục bị chặn |
| :--- | :--- |
| [EasyList](https://easylist.to/) | Quảng cáo, bao gồm banner, tập lệnh quảng cáo, hình ảnh và quảng cáo video. |
| [EasyPrivacy](https://easylist.to/) | Trình theo dõi, bao gồm tập lệnh theo dõi, pixel, web bug và các bộ thu thập thông tin khác. |
| [Fanboy's Annoyance List](https://easylist.to/) | Thông báo cookie, tiện ích mạng xã hội, cửa sổ bật lên trong trang và các yếu tố gây phiền khác. |
| [small oisd blocklist](https://oisd.nl/) | Các miền quảng cáo bổ sung. |

## Bảo vệ thông tin hệ thống (fingerprinting) {#protecting-system-information-fingerprinting}

Theo truyền thống, trình duyệt rò rỉ lượng lớn thông tin về máy tính của bạn cho bất kỳ trang web hoặc tập lệnh theo dõi nào yêu cầu! Và các trình theo dõi thu thập dữ liệu này để theo dõi bạn khi duyệt web.

| Dấu vân tay | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Audio | Chức năng xử lý âm thanh của trình duyệt web thường rò rỉ thông tin về card âm thanh của bạn. | Privacy Magic giảm các rò rỉ này bằng cách xóa bit ít quan trọng nhất khỏi dữ liệu âm thanh mỗi khi tập lệnh đọc dữ liệu đó. Việc xóa này không gây ảnh hưởng có thể nghe được. |
| Battery | Trình duyệt web thường sẽ cho bất kỳ trang web nào hỏi biết mức pin của bạn, liệu thiết bị có đang cắm nguồn hay không, và ước tính thời gian còn lại trước khi pin hết. | Privacy Magic ngăn chặn rò rỉ thông tin này bằng cách giả lập pin luôn ở mức 100% và nguồn điện luôn được cắm. |
| Browser | Một trang web có thể hỏi trình duyệt của bạn để lấy thông tin chi tiết về hệ điều hành mà nó đang chạy. | Privacy Magic giả mạo `navigator.platform` thành một giá trị duy nhất cho mỗi hệ điều hành khác nhau. |
| Device | Trình duyệt web sẽ cho bất kỳ trang web nào hỏi biết liệu bạn có đang dùng thiết bị gập hay không. | Privacy Magic luôn báo cáo rằng thiết bị của bạn không phải thiết bị gập. |
| Disk | Trình duyệt web thường rò rỉ dung lượng ổ đĩa còn trống dành cho trang web, và dung lượng mà trang web đang sử dụng, điều này có thể tiết lộ tổng dung lượng ổ đĩa trên máy tính của bạn và cách dữ liệu được lưu trữ. | Privacy Magic giả mạo các giá trị này để chúng giống nhau đối với mọi người. |
| Display | Theo truyền thống, trình duyệt web rò rỉ cài đặt hiển thị, bao gồm liệu hệ thống của bạn có được đặt thành "ưu tiên giảm chuyển động" hay không. | Privacy Magic ngăn chặn rò rỉ này. |
| Fonts | Trình duyệt web tiêu chuẩn rò rỉ các phông chữ tùy chỉnh bạn đã cài trên hệ thống, có thể làm dấu vân tay của bạn rất độc nhất. | Privacy Magic ẩn các phông chữ tùy chỉnh đã cài trên hệ thống của bạn khỏi mọi tập lệnh. Các trang web vẫn có thể sử dụng phông chữ hệ thống chuẩn và phông chữ web đã tải xuống. |
| Graphics | Canvas và WebGL là hai vectơ fingerprinting chính rò rỉ loại GPU (chip đồ họa) mà máy tính của bạn đang dùng. | Privacy Magic sử dụng các kỹ thuật nâng cao để ẩn chip đồ họa trong khi vẫn cho phép bạn chơi game và sử dụng các trang web dùng nhiều đồ họa. |
| Keyboard | Theo mặc định, trình duyệt rò rỉ bố cục bàn phím bạn đang dùng cho bất kỳ trang web nào hỏi. | Privacy Magic chặn bố cục bàn phím của bạn khỏi việc bị tiết lộ cho các tập lệnh trang web. |
| Language | Thông thường, trình duyệt web sẽ rò rỉ danh sách các ngôn ngữ bạn đã phê duyệt. Mặc dù việc chỉ định ngôn ngữ bạn muốn cho các trang web bạn truy cập là quan trọng, trình duyệt thường tiết lộ danh sách ngôn ngữ ưu tiên của người dùng, điều này có thể quá lộ liễu. | Privacy Magic chỉ cho phép một ngôn ngữ duy nhất được truyền tới các trang web bạn truy cập. |
| Math | Các tập lệnh theo dõi trên trang web có thể dùng hành vi đặc thù của các hàm Math, chẳng hạn cosine hoặc hyperbolic tangent, trên thiết bị của bạn để phân biệt bạn với những người dùng web khác. | Privacy Magic vá các hàm JavaScript Math để chúng hoạt động giống hệt nhau trên mọi nền tảng. |
| Memory | Các trang web có thể tìm hiểu từ hầu hết trình duyệt dung lượng bộ nhớ chưa sử dụng trên máy tính của bạn. | Privacy Magic ẩn dung lượng bộ nhớ có sẵn trên hệ thống của bạn khỏi các trang web và trình theo dõi. |
| Network | Trình duyệt thường rò rỉ chi tiết về loại kết nối mạng bạn đang có. | Privacy Magic ngăn các chi tiết này bị rò rỉ bằng cách làm chúng đồng nhất trên mọi người dùng. |
| Processor | Trình duyệt được thiết kế để báo cáo số lõi trên bộ xử lý của máy tính bạn. | Privacy Magic giả vờ rằng mọi người đều có đúng `4`. |
| Screen | Trình duyệt web sẽ rò rỉ kích thước màn hình của bạn cho bất kỳ trang web nào hỏi, bất kể cửa sổ trình duyệt lớn đến đâu. | Privacy Magic ẩn kích thước màn hình thực. |
| Time Zone | Trình duyệt web sẽ rò rỉ vị trí gần đúng của bạn khi tập lệnh hỏi múi giờ của bạn. Ví dụ, nếu bạn ở Giờ Trung Âu, trình duyệt sẽ cung cấp mã định danh múi giờ cho biết bạn đang ở Paris, Berlin, Luxembourg hay bất kỳ thành phố nào trong hàng chục thành phố khác. | Privacy Magic gộp các múi giờ để mỗi độ lệch múi giờ chỉ có một múi giờ đại diện duy nhất. Như vậy trình duyệt không rò rỉ thông tin không cần thiết về vị trí của bạn trên toàn cầu. |
| Timing | Các API đo thời gian độ phân giải cao cho phép tập lệnh đặc trưng hóa hệ thống của bạn bằng cách đo các khác biệt nhỏ trong thời gian của các hành vi trình duyệt. | Privacy Magic làm tròn các thời gian do các API này cung cấp để các tập lệnh theo dõi khó dùng chúng hơn để phân biệt giữa các trình duyệt. |
| Touch | Touch API rò rỉ liệu thiết bị của bạn có cảm ứng và số điểm chạm cho phép. | Privacy Magic ẩn thông tin này khỏi các trang web. |

## Xóa dấu vết theo dõi {#removing-tracking-breadcrumbs}

Một số tính năng trình duyệt dễ bị lợi dụng để chia sẻ một phần lịch sử duyệt web của bạn ("dấu vết") tới các trang web khác nhau bạn truy cập. Privacy Magic củng cố các tính năng này để chúng ít bị rò rỉ hơn.

| Dấu vết | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Cache Leaks | Trình duyệt lưu dữ liệu trong bộ nhớ đệm cục bộ, để khi bạn truy cập hoặc xem lại một trang, dữ liệu đó không cần tải lần thứ hai. Đáng tiếc, các bộ nhớ đệm đó đôi khi bị rò rỉ và sẽ tiết lộ điều gì đó về lịch sử duyệt web của bạn cho trang web bạn truy cập. | Privacy Magic xóa các bộ nhớ đệm dễ bị tấn công để các rò rỉ này không thể xảy ra. |
| Referrer Policy | Theo truyền thống, trình duyệt sẽ cho mỗi trang web bạn truy cập biết bạn đến từ trang web nào! | Privacy Magic xóa trang (hoặc đường dẫn) chính xác trong referrer, và vì lý do tương thích web, chỉ cho phép chia sẻ tên miền. |
| Tracking Parameters | Trình theo dõi có thể thêm các "tham số theo dõi" bổ sung vào địa chỉ các trang web bạn truy cập, để nhà quảng cáo theo dõi bạn là ai hoặc bạn đã duyệt ở đâu. | Privacy Magic xóa các tham số theo dõi đã biết khỏi địa chỉ web để thông tin này không được chia sẻ với các trang web bạn truy cập. |
| Window Name | Thông thường, API JavaScript `window.name` rò rỉ dữ liệu nếu bạn điều hướng giữa các trang web trong cùng một tab. | Privacy Magic ngăn chặn rò rỉ này bằng cách buộc mỗi trang web có một `window.name` riêng. |

## Ngăn chặn rò rỉ web {#stopping-web-leaks}

Trình duyệt web là những thứ phức tạp! Rò rỉ thông tin riêng tư có thể phát sinh từ nhiều tính năng trình duyệt khác nhau. Cách tiếp cận của chúng tôi trong Privacy Magic là vá các lỗ rò rỉ ở bất kỳ đâu chúng được tìm thấy.

| Tính năng | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Iframes | Một iframe là một "trang web bên trong trang web." Đó là một hộp bên trong trang bạn đang truy cập, nơi một trang web thứ hai có thể ẩn và sử dụng tất cả các kỹ thuật theo dõi mà một trang web thông thường có thể dùng. | Privacy Magic tiêm tất cả các biện pháp bảo vệ của mình vào mọi iframe trên trang web, để đảm bảo trình theo dõi không thể bỏ qua các biện pháp bảo vệ đó bằng cách ẩn bên trong iframe. |
| Service Workers | Service Workers là tính năng trình duyệt cho phép mã chạy ở nền ngay cả khi bạn không kết nối internet. Đáng tiếc, các Service Workers này dễ dàng rò rỉ thông tin riêng tư. | Service workers thường bị vô hiệu hóa trên tất cả các trang, để ngăn rò rỉ thông tin riêng tư không thể vá theo cách khác. |
| Shared Storage | Shared Storage là tính năng trình duyệt cho phép dữ liệu về việc duyệt web của bạn được tổng hợp và thu thập. Mặc dù được tuyên bố là bảo vệ quyền riêng tư, tính năng này đã gây ra những lo ngại mạnh mẽ về quyền riêng tư và dự kiến sẽ bị gỡ khỏi trình duyệt. | Privacy Magic đảm bảo Shared Storage bị vô hiệu hóa trên tất cả các trang web. |
| Shared Workers | Shared Workers là mã chạy ở nền và có thể được chia sẻ giữa các trang web. | Privacy Magic tiêm các biện pháp bảo vệ của mình vào mọi Shared Worker được bất kỳ trang web nào tải. |
| Web Workers | Web Workers là mã chạy ở nền trên trang web. Giống như các tập lệnh của trang chính, mã web worker có thể rò rỉ dữ liệu riêng tư. | Privacy Magic tiêm các biện pháp bảo vệ của mình vào mọi Web Worker trên trang, để đảm bảo trình theo dõi không thể dùng Web Workers để bỏ qua các biện pháp bảo vệ đó. |

## Tín hiệu quyền riêng tư {#privacy-signals}

Chúng tôi muốn cải thiện quyền riêng tư của bạn bằng mọi cách có thể. Vì vậy Privacy Magic gửi tín hiệu để yêu cầu các chính sách ủng hộ quyền riêng tư từ các trang web bạn truy cập.

| Tín hiệu | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Global Privacy Control | Global Privacy Control là tín hiệu có thể gửi tới các trang web bạn truy cập để cho biết bạn không muốn dữ liệu của mình bị bán hoặc chia sẻ. Đáng tiếc, hầu hết trình duyệt web không gửi tùy chọn Global Privacy Control theo mặc định. | Privacy Magic đảm bảo trình duyệt của bạn gửi header Global Privacy Control với mọi yêu cầu tới mọi trang web hoặc tài nguyên nhúng. Nó cũng tiêm tín hiệu JavaScript vào mọi trang và iframe. |

## Các biện pháp bảo vệ trình duyệt {#browser-protections}

Trình duyệt không chỉ hành xử kém trong cách chúng hiển thị trang web, mà còn trong cách chúng gửi dữ liệu tới công ty mẹ hoặc tới các công ty quảng cáo bên thứ ba. Privacy Magic vô hiệu hóa nhiều hành vi trình duyệt xấu mà nếu không sẽ rò rỉ thông tin riêng tư của bạn.

### Vô hiệu hóa các tính năng web dễ rò rỉ {#disabling-leaky-web-features}

| Tính năng | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Hyperlink Auditing | Trình duyệt tiêu chuẩn có tính năng cho phép trang web "ping" máy chủ theo dõi với các liên kết bạn nhấp. | Privacy Magic vô hiệu hóa ping này. |
| Third-Party Cookies | Tính năng theo dõi nổi tiếng nhất trong tất cả. Chrome cho phép cookie bên thứ ba, cho phép bạn bị theo dõi từ trang này sang trang khác. | Privacy Magic vô hiệu hóa cookie bên thứ ba theo mặc định. |
| WebRTC non-proxied UDP | WebRTC là khả năng của trình duyệt web cho phép bạn giao tiếp trực tiếp với người dùng web khác. Đáng tiếc, nếu bạn đang dùng proxy trình duyệt, các trình duyệt dựa trên Chrome tiêu chuẩn sẽ rò rỉ giao tiếp WebRTC ra ngoài proxy. | Privacy Magic chặn các rò rỉ WebRTC, trong khi vẫn cho phép WebRTC hoạt động trên các trang web sử dụng nó. |

### Vô hiệu hóa các dịch vụ đám mây xâm phạm {#disabling-invasive-cloud-services}

| Dịch vụ | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Alternate Error Pages | Theo mặc định, Chrome sẽ hiển thị các trang lỗi thay thế khi xảy ra lỗi. Để hiển thị các trang này, dữ liệu về các trang bạn đang truy cập được gửi tới máy chủ của Google. | Privacy Magic vô hiệu hóa các trang lỗi thay thế này để không có dữ liệu nào được gửi đi. |
| Safe Browsing Extended Reporting | Khi Safe Browsing chặn một trang, Chrome có thể gửi nội dung của trang bị chặn tới máy chủ của Google. | Privacy Magic chặn tính năng này, để không có dữ liệu nào được gửi đi. |
| Search Suggest | Theo mặc định, Chrome gửi bất cứ thứ gì bạn gõ vào thanh địa chỉ tới công cụ tìm kiếm mặc định (thường là Google search) trong khi bạn đang gõ, để đưa ra gợi ý tự động. | Privacy Magic chặn việc giám sát liên tục này, để Chrome chỉ gửi tìm kiếm của bạn khi bạn nhấn "enter". |
| Spelling Service | Chrome cung cấp "kiểm tra chính tả nâng cao" gửi nội dung bạn gõ tới máy chủ của Google. | Privacy Magic vô hiệu hóa tùy chọn này và chỉ cho phép Chrome sử dụng "kiểm tra chính tả cơ bản" cục bộ. |

### Vô hiệu hóa các API nhắm mục tiêu quảng cáo {#disabling-ad-targeting-apis}

| API | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| Ad Measurement API | Ad Measurement API (và Private Aggregation API liên quan) gửi dữ liệu về việc duyệt web của bạn, các quảng cáo bạn nhấp, và dữ liệu riêng tư khác tới máy chủ quảng cáo. | Privacy Magic vô hiệu hóa các API này để bảo vệ dữ liệu của bạn. |
| Protected Audience API | Theo mặc định, API này được Chrome cung cấp để chạy một cuộc đấu giá về sự chú ý của bạn thay mặt cho nhà quảng cáo. | Privacy Magic vô hiệu hóa API này để dữ liệu duyệt web của bạn không bị sử dụng theo cách này. |
| Topics API | Topics API của Chrome cung cấp cho nhà quảng cáo danh sách các chủ đề được cho là bạn quan tâm. | Privacy Magic vô hiệu hóa Topics API để giữ dữ liệu đó ở chế độ riêng tư. |

### Vô hiệu hóa các cài đặt Chrome dễ rò rỉ {#disabling-leaky-chrome-settings}

Chrome chứa một số cài đặt đi ngược lại quyền riêng tư của bạn: cụ thể là chức năng thu thập dữ liệu về thói quen duyệt web của bạn và gửi chúng tới máy chủ của Google. Các cài đặt này không thể được tiện ích trình duyệt kiểm soát trực tiếp, nhưng trong quá trình thiết lập, Privacy Magic sẽ giúp bạn tìm các cài đặt và tự tắt chúng.

| Cài đặt | Trình duyệt web tiêu chuẩn | Privacy Magic |
| :--- | :--- | :--- |
| History syncing | Khi bạn đăng nhập vào Chrome, nó đồng bộ lịch sử duyệt web giữa các thiết bị. Nó cũng lưu cùng dữ liệu đó trên máy chủ Google. | Privacy Magic hướng dẫn bạn tới cài đặt tắt đồng bộ lịch sử để giữ lịch sử duyệt web của bạn ở chế độ riêng tư. |
| User experience metrics | Chrome âm thầm gửi các chỉ số về cách bạn sử dụng trình duyệt về máy chủ của Google. | Privacy Magic giúp bạn chặn việc thu thập dữ liệu ẩn này. |
| Per-URL data collection | Với mỗi URL bạn truy cập, Chrome thu thập dữ liệu "ẩn danh" về việc duyệt web của bạn trên các trang đó và gửi chúng tới Google. | Privacy Magic giúp bạn vô hiệu hóa cài đặt này để ngăn dữ liệu bị gửi đi. |
