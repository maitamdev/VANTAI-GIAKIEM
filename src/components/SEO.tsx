import { Helmet } from 'react-helmet-async';
import { SITE } from '../data/siteData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  const metaTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | ${SITE.slogan}`;
  const metaDescription = description || "Cánh Đồng Xanh Logistics - Dịch vụ vận chuyển hàng hóa Bắc Nam uy tín, nhanh chóng, an toàn. Hotline: 0335 155 431";
  
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
