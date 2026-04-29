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
      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        <img src="/images/zalo-icon.svg" alt="Zalo Logo" className="w-10 h-10 object-contain" />
      </div>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-navy-800 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat Zalo tư vấn
      </span>
    </a>
  );
}
