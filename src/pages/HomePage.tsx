import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, PackageSearch, Truck, Settings, Maximize, Warehouse, MapPinCheck,
  Shield, Clock, BadgeDollarSign, Headset, Award, Package, MapPin,
  ArrowRight, Star, ChevronLeft, ChevronRight, Send
} from 'lucide-react';
import { SITE, STATS, SERVICES, ROUTES, COMMITMENTS, TESTIMONIALS, BLOG_POSTS } from '../data/siteData';
import SEO from '../components/SEO';

const ICON_MAP: Record<string, React.ElementType> = {
  PackageSearch, Truck, Settings, Maximize, Warehouse, MapPinCheck,
  Shield, Clock, BadgeDollarSign, Headset, Award, Package, MapPin,
};

function CountUp({ end, suffix = '' }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-orange-400">
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      <SEO 
        title="Trang Chủ" 
        description="Cánh Đồng Xanh Logistics cung cấp dịch vụ vận tải, giao nhận hàng hóa toàn quốc với hơn 500 đầu xe, cam kết uy tín và an toàn tuyệt đối."
      />
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url("/images/logo.png")' }}
        />
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm mb-6 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Đang hoạt động • Phục vụ 63 tỉnh thành
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Cánh Đồng{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  Xanh
                </span>
                <br />
                Logistics
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                {SITE.slogan}. Đội xe hơn <strong className="text-white">500 chiếc</strong>, cam kết bồi thường{' '}
                <strong className="text-orange-400">100%</strong> nếu hàng hư hỏng.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${SITE.hotline.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
                >
                  <Phone size={20} /> Gọi {SITE.hotline}
                </a>
                <Link
                  to="/dich-vu"
                  className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-base hover:bg-white/10 hover:border-white/50 transition-all hover:-translate-y-1"
                >
                  Xem dịch vụ <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Right - Quick Quote Form */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto lg:ml-auto">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-extrabold text-navy-800">Nhận báo giá miễn phí</h2>
                  <p className="text-navy-500 text-sm mt-1">Phản hồi trong 15 phút</p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1 block">Điểm gửi hàng</label>
                    <select className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-50/50 text-navy-700">
                      <option>TP. Hồ Chí Minh</option>
                      <option>Long An</option>
                      <option>Bình Thuận</option>
                      <option>Cần Thơ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1 block">Điểm nhận hàng</label>
                    <select className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-50/50 text-navy-700">
                      <option>Long An</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Bình Thuận</option>
                      <option>Nha Trang</option>
                      <option>Đắk Lắk</option>
                      <option>Cần Thơ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1 block">Loại hàng hóa</label>
                    <select className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-50/50 text-navy-700">
                      <option>Hàng lẻ, hàng ghép</option>
                      <option>Hàng nguyên chuyến</option>
                      <option>Máy móc thiết bị</option>
                      <option>Hàng cồng kềnh</option>
                      <option>Chuyển kho xưởng</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1 block">Số điện thoại</label>
                    <input
                      type="tel"
                      placeholder="Nhập SĐT của bạn"
                      className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-navy-50/50 text-navy-700 placeholder:text-navy-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 flex items-center justify-center gap-2"
                  >
                    <Send size={18} /> Gửi yêu cầu báo giá
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,70,155,0.03),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => {
              const Icon = ICON_MAP[stat.icon] || Award;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-navy-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                    <Icon size={28} className="text-navy-600 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                  <p className="text-navy-500 font-medium mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-20 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Dịch vụ của chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mt-3">Giải Pháp Vận Chuyển Toàn Diện</h2>
            <p className="text-navy-500 mt-3 max-w-2xl mx-auto">Đa dạng dịch vụ vận chuyển, đáp ứng mọi nhu cầu từ hàng lẻ nhỏ gọn đến máy móc thiết bị nặng.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Package;
              return (
                <div key={service.id} className="card-hover bg-white rounded-2xl p-7 border border-navy-100 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-5 group-hover:from-orange-500 group-hover:to-orange-600 transition-all shadow-lg">
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Link
                    to="/dich-vu"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 group-hover:gap-2 transition-all"
                  >
                    Xem chi tiết <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY US SECTION ===== */}
      <section className="py-20 gradient-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="text-orange-400 font-bold text-sm tracking-widest uppercase">Tại sao chọn chúng tôi</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">Cam Kết Của Cánh Đồng Xanh Logistics</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMMITMENTS.map((item) => {
              const Icon = ICON_MAP[item.icon] || Shield;
              return (
                <div key={item.title} className="text-center p-7 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-orange-400/30 transition-all group">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <Icon size={30} className="text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ROUTES SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Mạng lưới vận chuyển</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mt-3">Tuyến Đường Trọng Điểm</h2>
            <p className="text-navy-500 mt-3">Phủ sóng toàn quốc với lịch xe chạy hàng ngày</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROUTES.slice(0, 8).map((route) => (
              <div key={route.id} className="card-hover bg-white rounded-2xl border border-navy-100 relative overflow-hidden group flex flex-col">
                {route.hot && (
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-20">HOT</span>
                )}
                {route.image && (
                  <div className="h-32 overflow-hidden relative">
                    <img src={route.image} alt={`${route.from} - ${route.to}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">🚛</span>
                    <div>
                      <div className="font-bold text-navy-800 text-sm">{route.from}</div>
                      <div className="text-orange-500 text-xs font-bold">→ {route.to}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-navy-500">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-orange-400" />
                      <span>{route.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck size={14} className="text-orange-400" />
                      <span>{route.freq}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <Link to="/tuyen-van-chuyen" className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:gap-2 transition-all">
                      Chi tiết <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/tuyen-van-chuyen"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 text-white rounded-xl font-bold hover:bg-navy-700 transition-colors shadow-lg"
            >
              Xem tất cả tuyến đường <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Đánh giá khách hàng</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mt-3">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-navy-100 relative">
              <div className="text-6xl text-orange-200 absolute top-4 left-6">"</div>
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: TESTIMONIALS[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-navy-600 text-lg leading-relaxed italic mb-6">
                  {TESTIMONIALS[testimonialIdx].content}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-navy-800">{TESTIMONIALS[testimonialIdx].name}</div>
                    <div className="text-sm text-navy-500">{TESTIMONIALS[testimonialIdx].type}</div>
                    <div className="text-xs text-orange-500 font-semibold mt-1">Tuyến: {TESTIMONIALS[testimonialIdx].route}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTestimonialIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-colors"
                    >
                      <ChevronLeft size={18} className="text-navy-600" />
                    </button>
                    <button
                      onClick={() => setTestimonialIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                      className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center hover:bg-orange-50 hover:border-orange-300 transition-colors"
                    >
                      <ChevronRight size={18} className="text-navy-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${idx === testimonialIdx ? 'bg-orange-500 w-8' : 'bg-navy-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Tin tức & Cẩm nang</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mt-3">Kiến Thức Vận Tải</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div key={post.id} className="card-hover bg-white rounded-2xl border border-navy-100 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                  <Package size={48} className="text-navy-300" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{post.category}</span>
                  <h3 className="text-base font-bold text-navy-800 mt-3 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed line-clamp-2">{post.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy-100">
                    <span className="text-xs text-navy-400">{post.date}</span>
                    <Link to="/tin-tuc" className="text-sm font-semibold text-orange-500 flex items-center gap-1 hover:gap-2 transition-all">
                      Đọc thêm <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
