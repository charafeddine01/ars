import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Industrial Sandwich Panels | Roof, Wall & Cold Room Solutions",
  description = "Leading manufacturer of high-performance sandwich panels. PIR, PUR, EPS & Rockwool cores. Roof panels, wall panels, cold room solutions & insulated doors.",
  keywords = "sandwich panels, roof panels, wall panels, cold room panels, PIR panels, rockwool panels, insulated doors, industrial construction",
  canonical,
  ogImage = "/og-image.jpg",
  schemaData
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullTitle = title.includes('|') ? title : `${title} | Industrial Panel Solutions`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Industrial Panel Solutions",
  "description": "Leading manufacturer of high-performance sandwich panels for industrial and commercial construction.",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "logo": "/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+961 76 958 065",
    "contactType": "sales",
    "email": "sales@CoreCladIndustries.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "As Sarafand, Lebanon",
    "addressLocality": "Tebna Industrial City",
    "addressRegion": "Saida",
    "postalCode": "12345",
    "addressCountry": "LB"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61580029304464",
    " https://www.instagram.com/corecladindustries/"
    
  ]
};