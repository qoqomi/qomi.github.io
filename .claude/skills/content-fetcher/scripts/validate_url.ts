export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function detectContentType(url: string): 'youtube' | 'article' {
  try {
    const { hostname } = new URL(url);
    return hostname.includes('youtube.com') || hostname.includes('youtu.be')
      ? 'youtube'
      : 'article';
  } catch {
    return 'article';
  }
}

export async function isAccessible(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ArchiveBot/1.0)' },
    });
    return res.ok;
  } catch {
    return false;
  }
}
