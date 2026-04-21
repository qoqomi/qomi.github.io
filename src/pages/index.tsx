import React from 'react';
import { GetStaticProps } from 'next';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import PostItemList from '@/components/PostList/PostItemList';
import { getAllPosts } from '@/lib/posts';
import { Post } from '@/typings/typings';

interface IndexPageProps {
  posts: Post[];
}

function IndexPage({ posts }: IndexPageProps) {
  return (
    <>
      <SEO />
      <Profile padding="6rem 0" />
      <PostItemList posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().map(({ slug, frontmatter, readingTime }) => ({
    slug,
    frontmatter,
    readingTime,
  }));
  return { props: { posts } };
};

export default IndexPage;
