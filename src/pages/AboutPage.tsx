import { Link } from 'react-router-dom';
import { Award, Users, Target, Eye, Shield, Clock, BadgeDollarSign, Headset } from 'lucide-react';
import { SITE, STATS } from '../data/siteData';

export default function AboutPage() {
  return (
    <>
      {/* Banner */}
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Về Chúng Tôi</h1>
          <p className="text-white/70 text-lg">Hành trình 15+ năm đồng hành cùng doanh nghiệp Việt</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">Câu chuyện của chúng tôi</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-800 mt-3 mb-6">Từ Một Chiếc Xe Tải Đến Đội Xe 500+ Chiếc</h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p><strong className="text-navy-800">{SITE.name}</strong> được thành lập với sứ mệnh mang đến dịch vụ vận chuyển hàng hóa chuyên nghiệp, an toàn và tiết kiệm nhất cho doanh nghiệp và cá nhân trên toàn quốc.</p>
                <p>Từ một đội xe nhỏ chỉ vài chiếc, qua <strong>15+ năm</strong> nỗ lực không ngừng, chúng tôi đã phát triển thành một trong những đơn vị vận tải hàng đầu với <strong>hơn 500 xe tải</strong> các loại, phủ sóng tất cả 63 tỉnh thành.</p>
                <p>Với phương châm <em>"Uy tín làm nên thương hiệu"</em>, chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu, cam kết giao hàng đúng hẹn và bồi thường 100% nếu có sai sót.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: '15+ năm', sub: 'Kinh nghiệm ngành vận tải' },
                { icon: Users, label: '20,000+', sub: 'Khách hàng tin dùng' },
                { icon: Target, label: '63', sub: 'Tỉnh thành phủ sóng' },
                { icon: Eye, label: '500+', sub: 'Xe tải các loại' },
              ].map((item) => (
                <div key={item.label} className="bg-navy-50 rounded-2xl p-6 text-center card-hover">
                  <item.icon size={32} className="text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-black text-navy-800">{item.label}</div>
                  <div className="text-sm text-navy-500 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-navy-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center mb-5 shadow-lg">
                <Eye size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Tầm nhìn</h3>
              <p className="text-navy-600 leading-relaxed">Trở thành đơn vị vận tải hàng hóa số 1 Việt Nam, tiên phong ứng dụng công nghệ để mang đến trải nghiệm vận chuyển thông minh, minh bạch và hiệu quả nhất cho mọi khách hàng.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-navy-100 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg">
                <Target size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Sứ mệnh</h3>
              <p className="text-navy-600 leading-relaxed">Kết nối giao thương trên khắp Việt Nam bằng dịch vụ vận chuyển đáng tin cậy. Cam kết an toàn tuyệt đối, giá cước hợp lý, thời gian nhanh chóng để góp phần thúc đẩy phát triển kinh tế đất nước.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 gradient-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-14">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'An toàn', desc: 'Hàng hóa được bảo vệ tuyệt đối với bảo hiểm 100%' },
              { icon: Clock, title: 'Đúng hẹn', desc: 'Cam kết giao hàng đúng thời gian đã thỏa thuận' },
              { icon: BadgeDollarSign, title: 'Minh bạch', desc: 'Giá cước rõ ràng, không phát sinh chi phí ẩn' },
              { icon: Headset, title: 'Tận tâm', desc: 'Đội ngũ CSKH hỗ trợ 24/7 mọi lúc mọi nơi' },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <v.icon size={36} className="text-orange-400 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/60 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
