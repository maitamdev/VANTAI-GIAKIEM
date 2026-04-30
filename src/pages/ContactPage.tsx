import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE } from '../data/siteData';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Đổi tiêu đề Email thành Tiếng Việt
    const subjectContent = data.get('subject') || 'Liên hệ mới';
    data.append('_subject', `🚨 Cánh Đồng Xanh: Có khách hàng gửi yêu cầu [${subjectContent}]`);

    try {
      const response = await fetch("https://formspree.io/f/xykogoaq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        // Reset message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <SEO 
        title="Liên Hệ" 
        description="Liên hệ Cánh Đồng Xanh Logistics để nhận tư vấn và báo giá vận chuyển hàng hóa Bắc Nam nhanh nhất."
      />
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Liên Hệ</h1>
          <p className="text-white/70 text-lg">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold text-navy-800">Thông Tin Liên Hệ</h2>
              <p className="text-navy-500 leading-relaxed">Liên hệ ngay với chúng tôi qua các kênh dưới đây để nhận tư vấn và báo giá miễn phí.</p>

              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Hotline', value: SITE.hotline, href: `tel:${SITE.hotline.replace(/\s/g, '')}`, highlight: true },
                  { icon: MessageCircle, label: 'Zalo', value: `Nhắn Zalo: ${SITE.hotline}`, href: `https://zalo.me/${SITE.zalo}` },
                  { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: MapPin, label: 'Địa chỉ', value: SITE.address },
                  { icon: Clock, label: 'Đại diện', value: SITE.representative },
                  { icon: Clock, label: 'Mã số thuế', value: SITE.taxId },
                  { icon: Clock, label: 'Giờ làm việc', value: 'Thứ 2 – Chủ nhật: 7:00 – 21:00' },
                ].map((item) => (
                  <div key={item.label} className={`flex items-start gap-4 p-4 rounded-xl ${item.highlight ? 'bg-orange-50 border border-orange-200' : 'bg-navy-50'}`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${item.highlight ? 'bg-orange-500 text-white' : 'bg-navy-200 text-navy-600'}`}>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-navy-400 font-semibold uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`font-bold text-sm ${item.highlight ? 'text-orange-600' : 'text-navy-700'} hover:text-orange-500 transition-colors`}>
                          {item.value}
                        </a>
                      ) : (
                        <span className="font-medium text-sm text-navy-700">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-navy-100 h-52 bg-navy-100 flex items-center justify-center">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.649363063541!2d107.18228389999999!3d10.9511394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317511c97a296e8d%3A0x6a0c5c317f22af50!2sGia%20Ki%E1%BB%87m%2C%20Th%E1%BB%91ng%20Nh%E1%BA%A5t%2C%20Dong%20Nai%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-navy-100">
                <h2 className="text-2xl font-extrabold text-navy-800 mb-2">Gửi Yêu Cầu Tư Vấn</h2>
                <p className="text-navy-500 text-sm mb-8">Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>

                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl flex flex-col items-center justify-center text-center animate-fade-in-up">
                    <CheckCircle2 size={48} className="text-green-500 mb-3" />
                    <h3 className="text-lg font-bold">Gửi yêu cầu thành công!</h3>
                    <p className="text-sm mt-1">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Họ và tên *</label>
                        <input type="text" name="name" required placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Số điện thoại *</label>
                        <input type="tel" name="phone" required placeholder="0335 xxx xxx" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Email</label>
                      <input type="email" name="email" placeholder="email@company.com" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Chủ đề</label>
                      <select name="subject" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50 text-navy-700">
                        <option value="Yêu cầu báo giá">Yêu cầu báo giá</option>
                        <option value="Tư vấn dịch vụ">Tư vấn dịch vụ</option>
                        <option value="Khiếu nại / Phản hồi">Khiếu nại / Phản hồi</option>
                        <option value="Hợp tác kinh doanh">Hợp tác kinh doanh</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Nội dung *</label>
                      <textarea name="message" required rows={5} placeholder="Mô tả chi tiết yêu cầu của bạn..." className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50 resize-none" />
                    </div>
                    
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-sm font-semibold">Có lỗi xảy ra khi gửi. Vui lòng thử lại sau!</p>
                    )}
                    
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? (
                        <>Đang gửi...</>
                      ) : (
                        <><Send size={18} /> Gửi yêu cầu</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
