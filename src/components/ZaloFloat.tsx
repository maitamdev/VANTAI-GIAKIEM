import { MessageCircle } from 'lucide-react';
import { SITE } from '../data/siteData';

export default function ZaloFloat() {
  return (
    <a
      href={`https://zalo.me/${SITE.zalo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="zalo-float group"
      title="Nhắn Zalo tư vấn"
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        <MessageCircle size={26} className="text-white" />
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-navy-800 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat Zalo tư vấn
      </span>
    </a>
  );
}
