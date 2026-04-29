import { Link } from 'react-router-dom';
import { PackageSearch, Truck, Settings, Maximize, Warehouse, MapPinCheck, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { SERVICES, SITE } from '../data/siteData';

const ICON_MAP: Record<string, React.ElementType> = { PackageSearch, Truck, Settings, Maximize, Warehouse, MapPinCheck };

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Dịch Vụ Vận Chuyển</h1>
          <p className="text-white/70 text-lg">Giải pháp vận tải toàn diện cho mọi loại hàng hóa</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.icon] || Truck;
            const isEven = idx % 2 === 1;
            return (
              <div key={service.id} id={service.slug} className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:direction-rtl' : ''}`}>
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-5 shadow-lg">
                    <Icon size={30} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy-800 mb-4">{service.title}</h2>
                  <p className="text-navy-600 leading-relaxed mb-6">{service.detail}</p>
                  <ul className="space-y-3 mb-8">
                    {['Bảo hiểm 100% giá trị hàng hóa', 'Giao nhận tận nơi trên toàn quốc', 'Báo giá nhanh trong 15 phút', 'Đội ngũ bốc xếp chuyên nghiệp'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-navy-600">
                        <CheckCircle size={18} className="text-green-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/bang-gia" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-sm hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25">
                      Nhận báo giá <ArrowRight size={16} />
                    </Link>
                    <a href={`tel:${SITE.hotline.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-200 text-navy-700 rounded-xl font-bold text-sm hover:border-orange-400 hover:text-orange-500 transition-colors">
                      <Phone size={16} /> {SITE.hotline}
                    </a>
                  </div>
                </div>
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <div className="bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl h-72 md:h-80 flex items-center justify-center">
                    <Icon size={80} className="text-navy-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
