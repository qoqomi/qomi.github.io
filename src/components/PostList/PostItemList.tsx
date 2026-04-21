import { Post } from '@/typings/typings';
import { PostItemListWrap } from './PostItemList.style';
import PostItem from './PostItem';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

function PostItemList({ posts }: { posts: Post[] }) {
  const { containerRef, postList } = useInfiniteScroll(posts);

  return (
    <PostItemListWrap ref={containerRef}>
      {postList.map(({ slug, frontmatter, readingTime }) => (
        <PostItem
          key={slug}
          {...frontmatter}
          link={`/blog/${slug}`}
          time={readingTime}
        />
      ))}
    </PostItemListWrap>
  );
}

export default PostItemList;
