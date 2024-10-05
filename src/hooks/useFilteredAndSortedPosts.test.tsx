import { renderHook } from '@testing-library/react-hooks';
import { useFilteredAndSortedPosts } from './useFilteredAndSortedPosts';
import { describe, it, expect } from 'vitest';

const mockPosts = [
  {
    publicationId: '1',
    author: 'Author 1',
    publicationDate: '2023-10-01',
    title: 'Post 1',
    content: 'Content 1',
  },
  {
    publicationId: '2',
    author: 'Author 2',
    publicationDate: '2023-10-05',
    title: 'Post 2',
    content: 'Content 2',
  },
  {
    publicationId: '3',
    author: 'Author 1',
    publicationDate: '2023-09-28',
    title: 'Post 3',
    content: 'Content 3',
  },
];

describe('useFilteredAndSortedPosts', () => {
  it('should return all posts if no author is selected', () => {
    const { result } = renderHook(() =>
      useFilteredAndSortedPosts({
        posts: mockPosts,
        selectedAuthor: null,
        sortOrder: 'ASC',
      })
    );
    expect(result.current.sortedPosts).toHaveLength(3);
    expect(result.current.sortedPosts?.[0].title).toBe('Post 3');
  });

  it('should filter posts by selected author', () => {
    const { result } = renderHook(() =>
      useFilteredAndSortedPosts({
        posts: mockPosts,
        selectedAuthor: 'Author 1',
        sortOrder: 'ASC',
      })
    );

    expect(result.current.sortedPosts).toHaveLength(2);
    expect(result.current.sortedPosts?.[0].author).toBe('Author 1');
  });

  it('should sort posts in ascending order', () => {
    const { result } = renderHook(() =>
      useFilteredAndSortedPosts({
        posts: mockPosts,
        selectedAuthor: null,
        sortOrder: 'ASC',
      })
    );

    const sortedPosts = result.current.sortedPosts;
    expect(sortedPosts?.[0].publicationDate).toBe('2023-09-28');
    expect(sortedPosts?.[1].publicationDate).toBe('2023-10-01');
  });

  it('should sort posts in descending order', () => {
    const { result } = renderHook(() =>
      useFilteredAndSortedPosts({
        posts: mockPosts,
        selectedAuthor: null,
        sortOrder: 'DESC',
      })
    );

    const sortedPosts = result.current.sortedPosts;
    expect(sortedPosts?.[0].publicationDate).toBe('2023-10-05');
    expect(sortedPosts?.[2].publicationDate).toBe('2023-09-28');
  });

  it('should return an empty array if there are no posts', () => {
    const { result } = renderHook(() =>
      useFilteredAndSortedPosts({
        posts: [],
        selectedAuthor: null,
        sortOrder: 'ASC',
      })
    );

    expect(result.current.sortedPosts).toHaveLength(0);
  });
});
