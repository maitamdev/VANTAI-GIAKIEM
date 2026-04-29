import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/siteData';

export default function BlogPage() {
  return (
    <>
      <section className="gradient-hero py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" /></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Tin Tức & Cẩm Nang</h1>
          <p className="text-white/70 text-lg">Kiến thức vận tải, mẹo đóng gói và tin tức mới nhất</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="card-hover bg-white rounded-2xl border border-navy-100 overflow-hidden group">
                <div className="h-52 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center relative overflow-hidden">
                  <Package size={56} className="text-navy-300 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-4 left-4 text-xs font-bold text-white bg-orange-500 px-3 py-1 rounded-full">{post.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.summary}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-navy-50">
                    <span className="text-xs text-navy-400">{post.date}</span>
                    <span className="text-sm font-semibold text-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                      Đọc thêm <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
