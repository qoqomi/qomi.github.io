import { YoutubeTranscript } from 'youtube-transcript';

export interface YouTubeData {
  title: string;
  channelName: string;
  description: string;
  transcript: string;
}

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
    return u.searchParams.get('v');
  } catch {
    return null;
  }
}

export async function fetchYouTube(url: string): Promise<YouTubeData | null> {
  const videoId = extractVideoId(url);
  if (!videoId) return null;

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet`;
  const res = await fetch(apiUrl);
  const data = (await res.json()) as {
    items?: Array<{
      snippet: {
        title: string;
        channelTitle: string;
        description: string;
      };
    }>;
  };

  const item = data.items?.[0];
  if (!item) return null;

  const { title, channelTitle, description } = item.snippet;

  let transcript = '';
  try {
    const segments = await YoutubeTranscript.fetchTranscript(videoId);
    transcript = segments.map(s => s.text).join(' ');
  } catch {
    // 자막 없으면 description 폴백
    transcript = description;
  }

  return { title, channelName: channelTitle, description, transcript };
}
