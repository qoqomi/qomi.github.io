import Head from 'next/head';
import React from 'react';

import useSEO from 'hooks/useSEO';
import { MetaProps } from 'typings/typings';

const SEO = ({ title, description, cover }: MetaProps) => {
  const config = useSEO();

  const SEOTitle = title ? `${title} - ${config.title}` : config.title;
  const SEODescription = description || config.description;
  const SEOImg = cover || '';

  return (
    <Head>
      <title>{SEOTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="description" content={SEODescription} />
      <meta
        name="keywords"
        content="HTML, CSS, JavaScript, TypeScript, React, FrontEnd"
      />
      <meta name="author" content="유승연" />
      <meta property="og:title" content={SEOTitle} />
      <meta property="og:description" content={SEODescription} />
      {SEOImg && <meta property="og:image" content={SEOImg} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="유승연 블로그" />
      <meta name="twitter:title" content={SEOTitle} />
      <meta name="twitter:description" content={SEODescription} />
      {SEOImg && <meta name="twitter:image" content={SEOImg} />}
      <meta name="theme-color" content="#FEBE98" />
      <meta
        name="naver-site-verification"
        content="2cc40621eb11418be5791db057b14a2d2cc2800c"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="유승연 블로그 RSS"
        href={`${config.siteUrl}/rss.xml`}
      />
    </Head>
  );
};

export default SEO;
