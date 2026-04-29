import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../data/siteData';

export default function ProcessPage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute bottom-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Quy Trình Vận Chuyển</h1>
          <p className="text-white/70 text-lg">5 bước đơn giản – Minh bạch – Chuyên nghiệp</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy-200 via-orange-400 to-navy-200 hidden md:block" />

            <div className="space-y-12">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} className="flex gap-6 md:gap-10 items-start group">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-black text-xl shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 border border-navy-100 card-hover">
                    <h3 className="text-xl font-extrabold text-navy-800 mb-2">{step.title}</h3>
                    <p className="text-navy-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/bang-gia" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 hover:from-orange-600 hover:to-orange-700 transition-all hover:-translate-y-1">
              Bắt đầu gửi hàng ngay <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
