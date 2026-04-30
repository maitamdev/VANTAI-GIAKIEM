import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Truck, ArrowRight, MapPin, Phone, Search } from 'lucide-react';
import { ROUTES, SITE } from '../data/siteData';

export default function RoutesPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? ROUTES : ROUTES.filter((r) => r.from.includes(filter) || r.to.includes(filter));

  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Tuyến Vận Chuyển</h1>
          <p className="text-white/70 text-lg">Mạng lưới vận chuyển phủ sóng Bắc – Trung – Nam và toàn quốc</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {['all', 'TP.HCM', 'Long An', 'Bình Thuận'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  filter === f ? 'bg-navy-800 text-white shadow-lg' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {f === 'all' ? 'Tất cả tuyến' : `Từ ${f}`}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((route) => (
              <div key={route.id} className="card-hover bg-white rounded-2xl border border-navy-100 overflow-hidden group">
                <div className="bg-gradient-to-r from-navy-700 to-navy-800 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-orange-400" />
                      <span className="font-bold">{route.from}</span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-400">
                      <span className="text-lg">→</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{route.to}</span>
                      <MapPin size={20} className="text-orange-400" />
                    </div>
                  </div>
                  {route.hot && <span className="inline-block mt-2 bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">🔥 Tuyến hot</span>}
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center gap-3 text-navy-600">
                      <Clock size={16} className="text-orange-400 shrink-0" />
                      <span className="text-sm">Thời gian: <strong>{route.time}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-navy-600">
                      <Truck size={16} className="text-orange-400 shrink-0" />
                      <span className="text-sm">Tần suất: <strong>{route.freq}</strong></span>
                    </div>
                    <div className="flex items-start gap-3 text-navy-600">
                      <Search size={16} className="text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-sm">Hàng hóa: {route.goods}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link to="/bang-gia" className="flex-1 text-center py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold text-sm hover:from-orange-600 hover:to-orange-700 transition-all">
                      Báo giá
                    </Link>
                    <a href={`tel:${SITE.hotline.replace(/\s/g, '')}`} className="flex items-center justify-center w-11 h-11 border border-navy-200 rounded-xl hover:border-orange-400 hover:text-orange-500 transition-colors text-navy-600">
                      <Phone size={18} />
                    </a>
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
