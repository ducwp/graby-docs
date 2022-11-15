# Graby là gì?
## Rất tuyệt vời
Graby là một plugin lấy bài (cào bài) tự động dành cho [WordPress](https://wordpress.org/).

## Động lực

Chúng tôi yêu thích VuePress v1, nhưng được xây dựng trên nền Webpack, thời gian quay máy chủ dành cho nhà phát triển cho một trang tài liệu đơn giản với một vài trang sẽ trở nên không thể chịu nổi. Ngay cả các bản cập nhật HMR có thể mất tới vài giây để phản ánh trong trình duyệt!

Về cơ bản, điều này là do VuePress v1 là một ứng dụng Webpack. Thậm chí chỉ với hai trang, đó là một dự án Webpack đầy đủ (bao gồm tất cả các tệp nguồn chủ đề) đang được biên dịch. Nó thậm chí còn tồi tệ hơn khi dự án có nhiều trang - mọi trang trước tiên phải được biên dịch đầy đủ trước khi máy chủ thậm chí có thể hiển thị bất kỳ thứ gì!

## Dòng sông hờ hững

Ngẫu nhiên, Vite giải quyết những vấn đề này thực sự tốt: khởi động máy chủ gần như tức thì, biên dịch theo yêu cầu chỉ biên dịch trang đang được phục vụ và HMR nhanh như chớp. Ngoài ra, có một số vấn đề thiết kế bổ sung mà tôi đã lưu ý trong VuePress v1 theo thời gian nhưng không bao giờ có thời gian để khắc phục do số lượng cấu trúc lại nó sẽ yêu cầu.

Bây giờ, với Vite và Vue 3, đã đến lúc phải suy nghĩ lại về một "trình tạo trang web tĩnh do Vue cung cấp" thực sự có thể là gì.

## Cải tiến so với VuePress v1

Có một vài thứ được cải thiện từ VuePress v1 ....

### Nó sử dụng Vue 3

Tận dụng phân tích tĩnh mẫu được cải tiến của Vue 3 để chuỗi nội dung tĩnh nhiều nhất có thể. Nội dung tĩnh được gửi dưới dạng chuỗi ký tự thay vì mã hàm hiển thị JavaScript - do đó tải trọng JS rẻ hơn nhiều để phân tích cú pháp và quá trình hydrat hóa cũng trở nên nhanh hơn.

Lưu ý rằng việc tối ưu hóa được áp dụng trong khi vẫn cho phép người dùng tự do trộn các thành phần Vue bên trong nội dung đánh dấu - trình biên dịch thực hiện phân tách tĩnh / động cho bạn một cách tự động và bạn không bao giờ cần phải suy nghĩ về điều đó.

### Nó sử dụng Vite dưới mui xe

- Khởi động máy chủ nhà phát triển nhanh hơn
- Cập nhật nóng nhanh hơn
- Bản dựng nhanh hơn (sử dụng Rollup nội bộ)


### Trọng lượng trang nhẹ hơn

Vue 3 cây rung + Tách mã cuộn lên

- Không gửi siêu dữ liệu cho mọi trang theo mọi yêu cầu. Điều này tách trọng lượng trang khỏi tổng số trang. Chỉ siêu dữ liệu của trang hiện tại mới được gửi. Điều hướng phía máy khách tìm nạp thành phần và siêu dữ liệu của trang mới cùng nhau.

- Không sử dụng bộ định tuyến vue vì nhu cầu của VitePress là rất đơn giản và cụ thể - một bộ định tuyến tùy chỉnh đơn giản (dưới 200 LOC) được sử dụng thay thế.

VitePress uses **Vite** under the hood. This means:

- Instant server start
- Lightning fast HMR
- Optimized builds

## Markdown-Centered

So you can focus more on writing. Powered by MarkdownIt. Comes with many [built-in extensions](https://vitepress.vuejs.org/guide/markdown), and you can use Vue features in Markdown too!
