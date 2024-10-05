import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api/axios/instance';

interface AuthorResponse {
  authorPublications: {
    authorId: string;
    publicationIds: string[];
  }[];
}

async function findAuthors(): Promise<AuthorResponse> {
  return (await api.get('/7342bcfd-4fe6-470e-a6df-610afebf9b65')).data;
}

export function useFindAuthorsQuery() {
  return useQuery({
    queryKey: ['authors'],
    queryFn: findAuthors,
  });
}
