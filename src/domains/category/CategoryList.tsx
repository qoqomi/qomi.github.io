import React, { FunctionComponent } from 'react';

import { CategoryItem } from '@/typings/typings';
import { Category, CategoryListWrap, CountBadge } from './CategoryList.style';

interface CategoryListProps {
  categories: CategoryItem[];
}

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  categories,
}) {
  return (
    <CategoryListWrap>
      {categories.map(category => (
        <Category
          key={category.fieldValue}
          href={`/category?q=${category.fieldValue}`}
        >
          {category.fieldValue}
          <CountBadge>{category.totalCount}</CountBadge>
        </Category>
      ))}
    </CategoryListWrap>
  );
};

export default CategoryList;
