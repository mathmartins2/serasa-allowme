import { useMemo } from 'react';
import { parseISO } from 'date-fns';

interface Post {
  publicationId: string;
  author: string;
  publicationDate: string;
  title: string;
  content: string;
}

interface UseFilteredAndSortedPostsProps {
  posts: Post[] | undefined;
  selectedAuthor: string | null;
  sortOrder: 'ASC' | 'DESC';
}

export function useFilteredAndSortedPosts({ posts, selectedAuthor, sortOrder }: UseFilteredAndSortedPostsProps) {
  const sortedPosts = useMemo(() => {
    const filteredPosts = posts?.filter((post) => {
      if (selectedAuthor) {
        return post.author === selectedAuthor;
      }
      return true;
    });

    return filteredPosts?.slice().sort((a, b) => {
      const dateA = parseISO(a.publicationDate).getTime();
      const dateB = parseISO(b.publicationDate).getTime();
      return sortOrder === 'ASC' ? dateA - dateB : dateB - dateA;
    });
  }, [posts, selectedAuthor, sortOrder]);

  return { sortedPosts };
}
