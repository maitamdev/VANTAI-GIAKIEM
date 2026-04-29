import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE } from '../data/siteData';

const NAV_ITEMS = [
  { label: 'Trang chủ', path: '/' },
  {
    label: 'Giới thiệu', path: '/gioi-thieu',
  },
  {
    label: 'Dịch vụ', path: '/dich-vu',
    children: [
      { label: 'Hàng lẻ, hàng ghép', path: '/dich-vu#hang-le' },
      { label: 'Hàng nguyên chuyến', path: '/dich-vu#nguyen-chuyen' },
      { label: 'Máy móc thiết bị', path: '/dich-vu#may-moc' },
      { label: 'Chuyển kho xưởng', path: '/dich-vu#chuyen-kho' },
    ],
  },
  { label: 'Tuyến vận chuyển', path: '/tuyen-van-chuyen' },
  { label: 'Bảng giá', path: '/bang-gia' },
  { label: 'Đội xe', path: '/doi-xe' },
  { label: 'Tin tức', path: '/tin-tuc' },
  { label: 'Liên hệ', path: '/lien-he' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-white/80 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span>📍 {SITE.address}</span>
          <div className="flex items-center gap-6">
            <a href={`mailto:${SITE.email}`} className="hover:text-orange-400 transition-colors">
              ✉️ {SITE.email}
            </a>
            <span>🕐 Thứ 2 – Chủ nhật: 7:00 – 21:00</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/10'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/images/logo.png" alt="Cánh Đồng Xanh Logistics Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-lg shadow-lg group-hover:shadow-orange-500/20 transition-shadow" />
              <div className="hidden sm:block">
                <div className="font-extrabold text-navy-800 text-sm md:text-base leading-tight">CÁNH ĐỒNG XANH</div>
                <div className="text-[10px] md:text-xs text-orange-500 font-semibold tracking-widest">LOGISTICS</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      isActive(item.path)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-navy-700 hover:text-orange-500 hover:bg-orange-50/50'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={`transition-transform ${dropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && dropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl shadow-navy-900/10 border border-navy-100 py-2 animate-slide-down">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-navy-600 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE.hotline.replace(/\s/g, '')}`}
                className="hidden md:flex items-center gap-2 text-navy-800 font-bold text-sm hover:text-orange-500 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center animate-pulse-glow">
                  <Phone size={16} className="text-white" />
                </div>
                {SITE.hotline}
              </a>
              <Link
                to="/bang-gia"
                className="hidden sm:inline-flex px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
              >
                Nhận báo giá
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-50 transition-colors"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-navy-100 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-orange-500 bg-orange-50'
                        : 'text-navy-700 hover:text-orange-500 hover:bg-orange-50/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="pt-3 border-t border-navy-100 space-y-3">
                <a
                  href={`tel:${SITE.hotline.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-navy-50 text-navy-800 font-bold"
                >
                  <Phone size={18} className="text-orange-500" />
                  {SITE.hotline}
                </a>
                <Link
                  to="/bang-gia"
                  className="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold"
                >
                  Nhận báo giá ngay
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
