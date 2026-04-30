export const SITE = {
  name: 'Cánh Đồng Xanh Logistics',
  slogan: 'Vận chuyển hàng hóa toàn quốc – Nhanh chóng, an toàn, đúng hẹn',
  hotline: '0335 155 431',
  zalo: '0335155431',
  email: 'hoanghai19021997@gmail.com',
  address: 'Tổ 28 Ấp Tân Yên Gia Kiệm TP Đồng Nai',
  representative: 'Nguyễn Hoàng Hải',
  taxId: '3604026380',
};

export const STATS = [
  { value: 15, suffix: '+', label: 'Năm kinh nghiệm', icon: 'Award' },
  { value: 500, suffix: '+', label: 'Xe tải các loại', icon: 'Truck' },
  { value: 20000, suffix: '+', label: 'Đơn hàng mỗi năm', icon: 'Package' },
  { value: 63, suffix: '', label: 'Tỉnh thành phủ sóng', icon: 'MapPin' },
];

export interface Service {
  id: number; title: string; slug: string; desc: string; icon: string; detail: string;
}

export const SERVICES: Service[] = [
  { id: 1, title: 'Vận chuyển hàng lẻ, hàng ghép', slug: 'hang-le-hang-ghep', desc: 'Ghép hàng thông minh, tiết kiệm tối đa chi phí cho doanh nghiệp nhỏ và cá nhân.', icon: 'PackageSearch', detail: 'Dịch vụ vận chuyển hàng lẻ, hàng ghép giúp bạn tiết kiệm đến 60% chi phí so với thuê nguyên xe. Chúng tôi tối ưu tuyến đường, ghép hàng cùng chiều để đảm bảo hàng đi nhanh nhất.' },
  { id: 2, title: 'Vận chuyển hàng nguyên chuyến', slug: 'hang-nguyen-chuyen', desc: 'Thuê trọn xe từ 1.5 tấn đến 30 tấn, chủ động thời gian và lộ trình.', icon: 'Truck', detail: 'Với đội xe hơn 500 chiếc đa dạng tải trọng, chúng tôi đáp ứng mọi nhu cầu vận chuyển nguyên chuyến. Bạn hoàn toàn chủ động về thời gian xuất phát và lộ trình di chuyển.' },
  { id: 3, title: 'Vận chuyển máy móc thiết bị', slug: 'may-moc-thiet-bi', desc: 'Chuyên chở máy công trình, thiết bị y tế, máy sản xuất quá khổ quá tải.', icon: 'Settings', detail: 'Đội ngũ kỹ thuật viên có kinh nghiệm 10+ năm trong việc cố định, chằng buộc và vận chuyển an toàn các loại máy móc thiết bị nặng, quá khổ quá tải.' },
  { id: 4, title: 'Vận chuyển hàng cồng kềnh', slug: 'hang-cong-kenh', desc: 'Xử lý nội thất, vật liệu xây dựng, hàng kích thước lớn chuyên nghiệp.', icon: 'Maximize', detail: 'Chúng tôi có xe thùng dài, xe tải mở bửng chuyên dụng cho hàng cồng kềnh. Đội ngũ bốc xếp được đào tạo bài bản đảm bảo hàng hóa không bị trầy xước.' },
  { id: 5, title: 'Chuyển kho xưởng trọn gói', slug: 'chuyen-kho-xuong', desc: 'Dịch vụ trọn gói: bốc xếp, tháo dỡ, vận chuyển và lắp đặt tại điểm đến.', icon: 'Warehouse', detail: 'Giải pháp chuyển kho xưởng toàn diện bao gồm khảo sát, lên phương án, bốc xếp chuyên nghiệp, vận chuyển an toàn và lắp đặt tại vị trí mới theo yêu cầu.' },
  { id: 6, title: 'Giao nhận tận nơi', slug: 'giao-nhan-tan-noi', desc: 'Nhận hàng tận kho, giao hàng tận cửa trên toàn quốc.', icon: 'MapPinCheck', detail: 'Dịch vụ door-to-door: Nhân viên đến tận kho lấy hàng, vận chuyển và giao tận nơi cho người nhận. Có xác nhận bằng hình ảnh khi giao hàng thành công.' },
];

export interface Route {
  id: number; from: string; to: string; time: string; freq: string; goods: string; hot?: boolean;
}

export const ROUTES: Route[] = [
  { id: 1, from: 'Bình Thuận', to: 'Long An', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Nông sản (Thanh long), thiết bị, hàng tiêu dùng', hot: true },
  { id: 2, from: 'Long An', to: 'Bình Thuận', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Hàng công nghiệp, phân bón, nông sản', hot: true },
  { id: 3, from: 'TP.HCM', to: 'Long An', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Hàng tiêu dùng, vật liệu, máy móc', hot: true },
  { id: 4, from: 'Long An', to: 'TP.HCM', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Nông sản, hàng công nghiệp', hot: true },
  { id: 5, from: 'Bình Thuận', to: 'TP.HCM', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Nông sản (Thanh long), hải sản', hot: true },
  { id: 6, from: 'TP.HCM', to: 'Bình Thuận', time: 'Trong ngày', freq: 'Chạy liên tục', goods: 'Hàng tiêu dùng, máy móc, vật liệu xây dựng', hot: true },
];

export interface Vehicle {
  id: number; name: string; weight: string; length: string; goods: string; desc: string; icon: string; image?: string;
}

export const VEHICLES: Vehicle[] = [
  { 
    id: 1, 
    name: 'Xe tải thùng mui bạt 8 Tấn', 
    weight: '8 tấn', 
    length: '7.5m', 
    goods: 'Nông sản, Thanh long, Phân bón', 
    desc: 'Thiết kế thông thoáng, phù hợp vận chuyển nông sản tuyến đường ngắn và trung bình.', 
    icon: '🚛',
    image: '/images/fleet-2.png'
  },
  { 
    id: 2, 
    name: 'Xe tải tải trọng lớn 15 Tấn', 
    weight: '15 tấn', 
    length: '9.5m', 
    goods: 'Hàng công nghiệp, Vật liệu xây dựng, Phân bón số lượng lớn', 
    desc: 'Chuyên dụng cho tuyến Bình Thuận - Long An, tải trọng cao, tiết kiệm chi phí.', 
    icon: '🚚',
    image: '/images/fleet-1.png'
  }
];

export interface Testimonial {
  id: number; name: string; type: string; content: string; route: string; rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Anh Nguyễn Văn Minh', type: 'Giám đốc công ty TNHH Minh Phát', content: 'Chúng tôi đã sử dụng dịch vụ của Cánh Đồng Xanh Logistics hơn 3 năm. Hàng hóa luôn được giao đúng hẹn, đội ngũ nhân viên rất chuyên nghiệp và nhiệt tình.', route: 'TP.HCM – Hà Nội', rating: 5 },
  { id: 2, name: 'Chị Trần Thị Lan', type: 'Chủ cửa hàng nội thất', content: 'Mình gửi bàn ghế, tủ kệ đi Đà Nẵng thường xuyên. Hàng cồng kềnh nhưng bên Cánh Đồng Xanh Logistics đóng gói rất cẩn thận, chưa bao giờ bị trầy xước.', route: 'TP.HCM – Đà Nẵng', rating: 5 },
  { id: 3, name: 'Anh Lê Hoàng Dũng', type: 'Quản lý kho vận', content: 'Giá cước hợp lý, lịch xe chạy đều đặn mỗi ngày. Đặc biệt dịch vụ giao nhận tận nơi rất tiện lợi cho doanh nghiệp của chúng tôi.', route: 'Hà Nội – TP.HCM', rating: 5 },
  { id: 4, name: 'Chị Phạm Thúy Hằng', type: 'Chủ xưởng may', content: 'Dịch vụ chuyển kho xưởng rất chuyên nghiệp. Đội ngũ bốc xếp đến đúng giờ, tháo lắp máy móc cẩn thận. Rất hài lòng!', route: 'TP.HCM – Bình Dương', rating: 4 },
  { id: 5, name: 'Anh Võ Thanh Tùng', type: 'Đại lý phân phối', content: 'Tuyến đi Tây Nguyên khó tìm đơn vị vận chuyển uy tín, nhưng Cánh Đồng Xanh Logistics làm rất tốt. Hàng đến đúng hẹn, an toàn.', route: 'TP.HCM – Đắk Lắk', rating: 5 },
];

export interface BlogPost {
  id: number; title: string; slug: string; category: string; desc: string; date: string; summary: string;
}

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'Hướng dẫn đóng gói hàng hóa an toàn khi vận chuyển đường dài', slug: 'dong-goi-hang-hoa-an-toan', category: 'Cẩm nang', desc: 'Chia sẻ kinh nghiệm đóng gói chuyên nghiệp giúp hàng hóa không bị hư hỏng.', date: '15/04/2024', summary: 'Bài viết hướng dẫn chi tiết cách đóng gói từng loại hàng: hàng dễ vỡ, hàng điện tử, nội thất... để đảm bảo an toàn tuyệt đối trong quá trình vận chuyển liên tỉnh.' },
  { id: 2, title: 'Top 5 tiêu chí chọn đơn vị vận chuyển hàng hóa uy tín', slug: 'tieu-chi-chon-don-vi-van-chuyen', category: 'Kiến thức', desc: 'Những yếu tố quan trọng giúp bạn chọn đúng đối tác vận tải đáng tin cậy.', date: '10/04/2024', summary: 'Giá cước, thời gian giao hàng, chính sách bảo hiểm, đội xe và dịch vụ khách hàng – 5 yếu tố then chốt quyết định chất lượng dịch vụ vận chuyển.' },
  { id: 3, title: 'Bảng giá vận chuyển hàng hóa Bắc Nam mới nhất 2024', slug: 'bang-gia-van-chuyen-bac-nam-2024', category: 'Bảng giá', desc: 'Cập nhật giá cước vận chuyển mới nhất cho tuyến Bắc – Trung – Nam.', date: '05/04/2024', summary: 'Tổng hợp bảng giá chi tiết theo kg, theo khối và theo xe nguyên chuyến cho tất cả tuyến đường từ TP.HCM đi các tỉnh miền Bắc, miền Trung.' },
  { id: 4, title: 'Quy trình chuyển kho xưởng không gián đoạn sản xuất', slug: 'quy-trinh-chuyen-kho-xuong', category: 'Cẩm nang', desc: 'Kinh nghiệm di dời nhà xưởng mà không ảnh hưởng đến hoạt động kinh doanh.', date: '28/03/2024', summary: 'Lên kế hoạch chi tiết, phân chia giai đoạn di dời và bố trí nhân lực hợp lý giúp quá trình chuyển kho diễn ra suôn sẻ trong thời gian ngắn nhất.' },
  { id: 5, title: 'Vận chuyển máy móc thiết bị nặng cần lưu ý gì?', slug: 'van-chuyen-may-moc-nang', category: 'Kiến thức', desc: 'Những lưu ý quan trọng khi vận chuyển thiết bị công nghiệp nặng.', date: '20/03/2024', summary: 'Từ việc khảo sát đường đi, chọn phương tiện phù hợp đến kỹ thuật chằng buộc chuyên dụng – tất cả đều ảnh hưởng đến sự an toàn của hàng hóa.' },
  { id: 6, title: 'Cánh Đồng Xanh Logistics khai trương kho mới tại Đà Nẵng', slug: 'khai-truong-kho-da-nang', category: 'Tin công ty', desc: 'Mở rộng mạng lưới kho bãi tại miền Trung, phục vụ khách hàng tốt hơn.', date: '15/03/2024', summary: 'Kho mới tại Đà Nẵng với diện tích 2.000m², trang bị hệ thống camera giám sát 24/7 và xe nâng hiện đại, nâng cao năng lực phục vụ khu vực miền Trung.' },
];

export interface FAQ { id: number; q: string; a: string; }

export const FAQS: FAQ[] = [
  { id: 1, q: 'Gửi hàng lẻ từ TP.HCM ra Hà Nội mất bao lâu?', a: 'Thời gian vận chuyển hàng lẻ từ TP.HCM ra Hà Nội trung bình từ 3-4 ngày làm việc, tùy thuộc vào loại hàng và khối lượng.' },
  { id: 2, q: 'Hàng hóa có được bảo hiểm không?', a: 'Có. Tất cả hàng hóa đều được bảo hiểm theo giá trị khai báo. Chúng tôi cam kết bồi thường 100% nếu hàng bị hư hỏng hoặc thất lạc do lỗi vận chuyển.' },
  { id: 3, q: 'Công ty có hỗ trợ bốc xếp hàng hóa không?', a: 'Có. Chúng tôi có đội ngũ bốc xếp chuyên nghiệp tại tất cả các kho chính. Với hàng máy móc nặng, chúng tôi sử dụng xe nâng và thiết bị chuyên dụng.' },
  { id: 4, q: 'Giá cước vận chuyển tính theo kg hay theo khối?', a: 'Giá cước được tính theo cách nào có lợi nhất cho khách hàng. Hàng nặng tính theo kg, hàng cồng kềnh nhẹ tính theo khối (CBM). Liên hệ hotline để được báo giá chính xác.' },
  { id: 5, q: 'Tôi có thể theo dõi đơn hàng bằng cách nào?', a: 'Bạn có thể gọi hotline 0335 155 431 hoặc nhắn Zalo cung cấp mã vận đơn, nhân viên sẽ cập nhật tình trạng hàng hóa ngay lập tức.' },
  { id: 6, q: 'Công ty có xuất hóa đơn VAT không?', a: 'Có. Chúng tôi hỗ trợ xuất hóa đơn GTGT (VAT) điện tử cho tất cả khách hàng có nhu cầu. Vui lòng cung cấp thông tin công ty khi đặt dịch vụ.' },
  { id: 7, q: 'Lịch xe chạy các tuyến như thế nào?', a: 'Xe khởi hành hàng ngày tại các tuyến chính: TP.HCM – Hà Nội (5 chuyến/ngày), TP.HCM – Đà Nẵng (4 chuyến/ngày), TP.HCM – Miền Tây (liên tục trong ngày).' },
  { id: 8, q: 'Hàng hóa nào không được vận chuyển?', a: 'Chúng tôi không nhận vận chuyển: chất cháy nổ, hóa chất độc hại, ma túy, vũ khí, động vật hoang dã và các mặt hàng bị pháp luật cấm lưu thông.' },
  { id: 9, q: 'Có được lưu kho miễn phí không?', a: 'Có. Hàng hóa được lưu kho miễn phí trong 48 giờ kể từ khi đến kho đích. Sau thời gian này, phí lưu kho là 5.000đ/ngày/kiện hàng.' },
  { id: 10, q: 'Thủ tục gửi hàng có phức tạp không?', a: 'Rất đơn giản! Bạn chỉ cần gọi hotline hoặc nhắn Zalo, cung cấp thông tin hàng hóa và địa chỉ giao nhận. Chúng tôi sẽ sắp xếp xe đến lấy hàng tận nơi.' },
];

export const COMMITMENTS = [
  { icon: 'Shield', title: 'Bảo hiểm 100%', desc: 'Cam kết bồi thường toàn bộ giá trị nếu hàng hư hỏng do vận chuyển.' },
  { icon: 'Clock', title: 'Đúng hẹn', desc: 'Lịch xe chạy hàng ngày, cam kết giao hàng đúng thời gian thỏa thuận.' },
  { icon: 'BadgeDollarSign', title: 'Giá cước tốt nhất', desc: 'Báo giá cạnh tranh, minh bạch, không phát sinh chi phí ẩn.' },
  { icon: 'Headset', title: 'Hỗ trợ 24/7', desc: 'Đội ngũ tư vấn và CSKH sẵn sàng hỗ trợ mọi lúc, mọi nơi.' },
];

export const PROCESS_STEPS = [
  { step: 1, title: 'Tiếp nhận yêu cầu', desc: 'Khách hàng gọi hotline, nhắn Zalo hoặc gửi form báo giá trên website.' },
  { step: 2, title: 'Báo giá & xác nhận', desc: 'Nhân viên tư vấn báo giá chi tiết trong vòng 15 phút và xác nhận đơn hàng.' },
  { step: 3, title: 'Lấy hàng tận nơi', desc: 'Xe đến tận kho/nhà lấy hàng, kiểm đếm và đóng gói cẩn thận.' },
  { step: 4, title: 'Vận chuyển an toàn', desc: 'Hàng được vận chuyển trên xe chuyên dụng có bảo hiểm đầy đủ.' },
  { step: 5, title: 'Giao hàng tận nơi', desc: 'Giao hàng đến tận địa chỉ người nhận, xác nhận bằng hình ảnh và chữ ký.' },
];
