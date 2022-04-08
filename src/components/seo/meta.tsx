import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface MetaProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const Meta: FC<MetaProps> = ({ title, description, url, image }) => {
  const { t: tSeo } = useTranslation('seo');

  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="alternate" type="application/rss+xml" href="/sitemap.xml" />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      <meta name="description" content={description} />
      <link rel="canonical" href={process.env.REACT_APP_WEBSITE_URL + url} />
      <meta name="Language" content="fr" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <meta name="copyright" content={tSeo('copyright')} />
      <meta name="publisher" content={tSeo('publisher')} />
      <meta name="reply-to" content={tSeo('reply-to')} />
      <meta httpEquiv="Cache-control" content="public" />

      <meta name="keywords" content={tSeo('keywords')} />
      <meta name="Author" content={tSeo('author')} />
      <meta name="Generator" content={tSeo('generator')} />
      <meta name="Identifier-URL" content={process.env.REACT_APP_WEBSITE_URL} />
      <meta name="Distribution" content="global" />
      <meta name="Revisit-After" content="15 days" />
      <meta name="Category" content={tSeo('category')} />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.REACT_APP_WEBSITE_URL + url} />
      <meta property="og:image" content={process.env.REACT_APP_WEBSITE_URL + image} />
      <meta property="og:image:secure_url" content={process.env.REACT_APP_WEBSITE_URL + image} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={tSeo('title')} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@LafranceSami" />
      <meta name="twitter:creator" content="@LafranceSami" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.REACT_APP_WEBSITE_URL + image} />
      <meta name="twitter:image:alt" content="Logo" />
    </Helmet>
  );
};

export default Meta;
