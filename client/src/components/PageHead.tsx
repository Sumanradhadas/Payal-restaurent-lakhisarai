import { Helmet } from "react-helmet-async";

interface PageHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export default function PageHead({ title, description, path = "", image }: PageHeadProps) {
  const baseUrl = "https://payal-restaurent-lakhisarai.onrender.com";
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
