import React from 'react';
import { GetStaticProps } from 'next';

import SEO from '@/components/Layout/SEO';
import Profile from '@/components/Profile/Profile';
import CategoryList from '@/domains/category/CategoryList';
import { getAllCategories } from '@/lib/posts';
import { CategoryItem } from '@/typings/typings';

interface CategoryPageProps {
  categories: CategoryItem[];
}

function CategoryPage({ categories }: CategoryPageProps) {
  return (
    <>
      <SEO title="Category" />
      <Profile padding="6rem 0 1rem" />
      <CategoryList categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getAllCategories();
  return { props: { categories } };
};

export default CategoryPage;
