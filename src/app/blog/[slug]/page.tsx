import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import BlogPostLayout from './BlogPostLayout';

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      images: post.frontmatter.thumbnail ? [post.frontmatter.thumbnail] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <BlogPostLayout frontmatter={post.frontmatter}>
      <MDXRemote
        source={post.content ?? ''}
        options={{
          mdxOptions: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            remarkPlugins: [remarkGfm] as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rehypePlugins: [rehypeHighlight] as any,
          },
        }}
      />
    </BlogPostLayout>
  );
}
