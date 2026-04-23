
import { getAllPosts, getAllCategories } from '@/lib/posts';
import BlogIndexClient from '../../components/Blog/BlogIndexClient';



export default function BlogPage() {
  const posts = getAllPosts().map(({ slug, frontmatter, readingTime }) => ({
    slug,
    frontmatter,
    readingTime,
  }));
  const categories = getAllCategories();

  return <BlogIndexClient posts={posts} categories={categories} />;
}
