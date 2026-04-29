import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { SITE, SERVICES, ROUTES } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">Bạn cần vận chuyển hàng hóa?</h3>
            <p className="text-white/90 mt-1">Liên hệ ngay để nhận báo giá tốt nhất trong 15 phút!</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE.hotline.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-xl font-bold text-sm hover:bg-navy-50 transition-colors shadow-lg"
            >
              <Phone size={18} /> Gọi {SITE.hotline}
            </a>
            <Link
              to="/bang-gia"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white rounded-xl font-bold text-sm hover:bg-white hover:text-orange-600 transition-all"
            >
              Nhận báo giá ngay
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="Cánh Đồng Xanh Logistics Logo" className="w-12 h-12 object-contain bg-white rounded-lg p-1" />
              <div>
                <div className="font-extrabold text-white text-sm">CÁNH ĐỒNG XANH</div>
                <div className="text-xs text-orange-400 font-semibold tracking-widest">LOGISTICS</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {SITE.slogan}. Đội xe hơn 500 chiếc, phục vụ 63 tỉnh thành trên toàn quốc.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${SITE.hotline.replace(/\s/g, '')}`} className="flex items-center gap-3 text-white/70 hover:text-orange-400 transition-colors">
                <Phone size={16} className="text-orange-400 shrink-0" /> {SITE.hotline}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-white/70 hover:text-orange-400 transition-colors">
                <Mail size={16} className="text-orange-400 shrink-0" /> {SITE.email}
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" /> {SITE.address}
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock size={16} className="text-orange-400 shrink-0" /> T2 – CN: 7:00 – 21:00
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Dịch vụ chính</h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to="/dich-vu" className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition-colors group">
                    <ChevronRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Routes */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Tuyến vận chuyển</h4>
            <ul className="space-y-2.5">
              {ROUTES.slice(0, 6).map((r) => (
                <li key={r.id}>
                  <Link to="/tuyen-van-chuyen" className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition-colors group">
                    <ChevronRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {r.from} → {r.to}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy & Support */}
          <div>
            <h4 className="text-white font-bold mb-5 text-base">Hỗ trợ</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Quy trình vận chuyển', path: '/quy-trinh' },
                { label: 'Câu hỏi thường gặp', path: '/faq' },
                { label: 'Chính sách bảo hiểm', path: '/faq' },
                { label: 'Chính sách bồi thường', path: '/faq' },
                { label: 'Liên hệ hợp tác', path: '/lien-he' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="flex items-center gap-2 text-sm text-white/60 hover:text-orange-400 transition-colors group">
                    <ChevronRight size={14} className="text-orange-500 group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© 2024 {SITE.name}. Tất cả quyền được bảo lưu.</p>
          <p>Thiết kế bởi <span className="text-orange-400 font-semibold">Cánh Đồng Xanh Logistics</span></p>
        </div>
      </div>
    </footer>
  );
}
