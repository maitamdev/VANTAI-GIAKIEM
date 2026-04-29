import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center gradient-hero text-white">
      <div className="text-center px-6">
        <div className="text-[120px] md:text-[180px] font-black text-white/10 leading-none select-none">404</div>
        <h1 className="text-3xl md:text-4xl font-extrabold -mt-10 mb-4">Trang Không Tồn Tại</h1>
        <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
          Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/30"
          >
            <Home size={18} /> Về trang chủ
          </Link>
          <Link
            to="/lien-he"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            Liên hệ hỗ trợ <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
