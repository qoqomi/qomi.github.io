const SITE_CONFIG = {
  title: 'My Blog',
  description: '개인 기술 블로그입니다.',
  siteUrl: 'https://example.com',
} as const;

export type SiteConfig = typeof SITE_CONFIG;

export default function useSEO(): SiteConfig {
  return SITE_CONFIG;
}
