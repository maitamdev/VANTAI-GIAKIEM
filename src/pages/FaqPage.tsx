import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS, SITE } from '../data/siteData';

export default function FaqPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Câu Hỏi Thường Gặp</h1>
          <p className="text-white/70 text-lg">Giải đáp nhanh mọi thắc mắc về dịch vụ vận chuyển</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.id} className={`border rounded-2xl overflow-hidden transition-all ${openId === faq.id ? 'border-orange-300 shadow-lg shadow-orange-500/10' : 'border-navy-100'}`}>
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-navy-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className={`shrink-0 ${openId === faq.id ? 'text-orange-500' : 'text-navy-400'}`} />
                    <span className={`font-semibold text-sm md:text-base ${openId === faq.id ? 'text-orange-600' : 'text-navy-700'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown size={20} className={`shrink-0 text-navy-400 transition-transform ${openId === faq.id ? 'rotate-180 text-orange-500' : ''}`} />
                </button>
                {openId === faq.id && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 animate-slide-down">
                    <div className="pl-8 text-navy-600 text-sm md:text-base leading-relaxed border-l-2 border-orange-300 ml-0.5">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center bg-navy-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-800 mb-2">Không tìm thấy câu trả lời?</h3>
            <p className="text-navy-500 text-sm mb-5">Liên hệ trực tiếp với đội ngũ tư vấn của chúng tôi</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${SITE.hotline.replace(/\s/g, '')}`} className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-orange-500/25">
                Gọi {SITE.hotline}
              </a>
              <Link to="/lien-he" className="px-6 py-3 border-2 border-navy-200 text-navy-700 rounded-xl font-bold text-sm hover:border-orange-400 transition-colors">
                Gửi tin nhắn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
