import { Send, Phone, CheckCircle } from 'lucide-react';
import { SITE } from '../data/siteData';

export default function PricingPage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-10 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Bảng Giá & Báo Giá</h1>
          <p className="text-white/70 text-lg">Giá cước cạnh tranh nhất – Minh bạch – Không phát sinh</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Quote Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-navy-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-navy-800 mb-2">Nhận Báo Giá Chi Tiết</h2>
                <p className="text-navy-500 text-sm">Điền thông tin bên dưới, chúng tôi sẽ phản hồi kèm báo giá chi tiết trong vòng 15 phút.</p>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Họ tên *</label>
                    <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Số điện thoại *</label>
                    <input type="tel" placeholder="0335..." className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Điểm gửi *</label>
                    <input type="text" placeholder="Bình Thuận" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Điểm nhận *</label>
                    <input type="text" placeholder="Long An" className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Loại hàng hóa</label>
                  <select className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50 text-navy-700">
                    <option>Hàng nông sản (Thanh long)</option>
                    <option>Hàng nguyên chuyến</option>
                    <option>Phân bón, vật tư nông nghiệp</option>
                    <option>Hàng công nghiệp</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Khối lượng ước tính</label>
                  <input type="text" placeholder="VD: 500kg, 2 tấn, 5 khối..." className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy-700 mb-1.5 block">Ghi chú thêm</label>
                  <textarea rows={3} placeholder="Mô tả chi tiết hàng hóa..." className="w-full px-4 py-3 border border-navy-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-navy-50/50 resize-none" />
                </div>
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-base hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2">
                  <Send size={18} /> Gửi yêu cầu báo giá
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-navy-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-navy-500 mb-1">Cần báo giá ngay lập tức?</p>
                  <a href={`tel:${SITE.hotline.replace(/\s/g, '')}`} className="flex items-center gap-2 text-orange-600 font-bold text-lg hover:text-orange-500 transition-colors">
                    <Phone size={20} /> {SITE.hotline}
                  </a>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 text-navy-600 font-medium text-sm justify-end">
                    <CheckCircle size={16} className="text-green-500" /> Miễn phí tư vấn
                  </div>
                  <div className="flex items-center gap-1.5 text-navy-600 font-medium text-sm justify-end mt-1">
                    <CheckCircle size={16} className="text-green-500" /> Báo giá minh bạch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
