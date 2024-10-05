import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api/axios/instance';

interface FindPostsResponse {
  author: string;
  publicationDate: string;
  title: string;
  publicationId: string;
  socialMedia: {
    linkedin: string;
    originalPostUrl: string;
    twitter: string;
  };
  content: string;
}

async function findPosts(): Promise<FindPostsResponse[]> {
  return (await api.get('/297932b2-1303-4136-bbd1-cb20875bf87c')).data;
}

export function useFindPostsQuery() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: findPosts,
  });
}
