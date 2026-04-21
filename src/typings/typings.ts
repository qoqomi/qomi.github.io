export interface PostFrontmatter {
  title: string;
  summary: string;
  date: string;
  category: string[];
  thumbnail?: string | null;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content?: string;
  readingTime: number;
}

export type PostItemProps = {
  title: string;
  summary: string;
  date: string;
  thumbnail?: string | null;
  link: string;
  time: number;
};

export type CategoryItem = {
  fieldValue: string;
  totalCount: number;
};

export type MetaProps = {
  title?: string;
  description?: string;
  cover?: string;
};

// Archive
export type QueueType = 'Later' | 'Shortlist' | 'Archive';
export type ContentType = 'youtube' | 'article';

export interface ArchiveItem {
  id: string;
  url: string;
  type: ContentType;
  title: string;
  summary: string;
  tags: string[];
  queue: QueueType;
  memo: string | null;
  created_at: string;
  read_at: string | null;
}
