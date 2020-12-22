import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../../hooks/useSiteMetadata';

const SiteMetadata = ({ pathname }) => {
  const { siteUrl, title, twitter } = useSiteMetadata();
  const href = `${siteUrl}${pathname}`;

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      {/* <html lang={locale} /> */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <link rel="canonical" href={href} />
      <meta name="docsearch:version" content="2.0" />
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />

      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:locale" content={locale} /> */}
      <meta property="og:site_name" content={title} />
      {/* <meta property="og:image" content={`${siteUrl}${gatsbyIcon}`} /> */}
      <meta property="og:image:alt" content="Gatsby Logo" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  );
};

export default SiteMetadata;
