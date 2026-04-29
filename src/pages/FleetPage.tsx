import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VEHICLES } from '../data/siteData';

export default function FleetPage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Đội Xe & Kho Bãi</h1>
          <p className="text-white/70 text-lg">Hơn 500 xe tải các loại – Hệ thống kho bãi hiện đại trên toàn quốc</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-navy-800">Đội Xe Đa Dạng Tải Trọng</h2>
            <p className="text-navy-500 mt-3">Từ xe 500kg giao nội thành đến Container 40ft chạy Bắc Nam</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {VEHICLES.map((v) => (
              <div key={v.id} className="card-hover bg-white rounded-2xl border border-navy-100 overflow-hidden group">
                <div className="bg-gradient-to-br from-navy-100 to-navy-200 h-44 flex items-center justify-center">
                  <span className="text-6xl">{v.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-800 text-base mb-2 group-hover:text-orange-500 transition-colors">{v.name}</h3>
                  <div className="space-y-1.5 text-sm text-navy-500 mb-4">
                    <div>Tải trọng: <strong className="text-navy-700">{v.weight}</strong></div>
                    <div>Thùng dài: <strong className="text-navy-700">{v.length}</strong></div>
                    <div>Phù hợp: {v.goods}</div>
                  </div>
                  <p className="text-xs text-navy-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-navy-800">Hệ Thống Kho Bãi</h2>
            <p className="text-navy-500 mt-3">Kho bãi hiện đại tại các đầu mối trọng điểm trên toàn quốc</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { city: 'TP. Hồ Chí Minh', addr: '123 Quốc Lộ 1A, Quận 12', size: '5,000 m²', features: 'Camera 24/7, xe nâng, bốc xếp' },
              { city: 'Hà Nội', addr: 'KCN Gia Lâm, Long Biên', size: '3,000 m²', features: 'Kho mát, kho thường, bảo vệ 24/7' },
              { city: 'Đà Nẵng', addr: 'KCN Hòa Khánh', size: '2,000 m²', features: 'Trung chuyển miền Trung, kho thoáng' },
            ].map((wh) => (
              <div key={wh.city} className="card-hover bg-white rounded-2xl p-7 border border-navy-100">
                <div className="text-3xl mb-4">🏭</div>
                <h3 className="font-bold text-navy-800 text-lg mb-2">Kho {wh.city}</h3>
                <div className="space-y-2 text-sm text-navy-500">
                  <div>📍 {wh.addr}</div>
                  <div>📐 Diện tích: <strong>{wh.size}</strong></div>
                  <div>✅ {wh.features}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/lien-he" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 transition-all hover:-translate-y-1">
              Liên hệ xem kho <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
