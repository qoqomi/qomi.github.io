import type { Metadata } from 'next';

import { getAllPosts, getAllCategories } from '@/lib/posts';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blog',
  description: '기술 블로그 포스트 목록',
};

export default function BlogPage() {
  const posts = getAllPosts().map(({ slug, frontmatter, readingTime }) => ({
    slug,
    frontmatter,
    readingTime,
  }));
  const categories = getAllCategories();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
