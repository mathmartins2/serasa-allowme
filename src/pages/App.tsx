import { useState } from 'react';
import { Header } from '../components/Header';
import { Article } from '../components/Article';
import { Footer } from '../components/Footer';
import { News } from '../components/News';
import { useFindPostsQuery } from './repository/query/findPostsQuery';
import { FilterButton } from '../components/FilterButton';
import { ButtonGroup } from '../components/FilterButton/styles';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useFindAuthorsQuery } from './repository/query/findAuthorsQuery';
import { PageWrapper, ButtonGroupWrapper, ContentWrapper, ArticlesSection, Spinner, SpinnerWrapper } from './styles';
import { useFilteredAndSortedPosts } from '../hooks/useFilteredAndSortedPosts';

function App() {
  const posts = useFindPostsQuery();
  const authors = useFindAuthorsQuery();
  const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('DESC');
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

  const { sortedPosts } = useFilteredAndSortedPosts({
    posts: posts.data || [],
    selectedAuthor,
    sortOrder,
  });

  if (posts.isError || authors.isError) {
    return (
      <PageWrapper>
        <Header />
        <ContentWrapper>
          <div style={{ textAlign: 'center', color: 'red', padding: '20px' }}>
            {posts.isError ? "Erro ao carregar os posts. Tente novamente mais tarde" : "Erro ao carregar os autores. Tente novamente mais tarde"}
          </div>
        </ContentWrapper>
        <Footer />
      </PageWrapper>
    );
  }

  const handleSortOrderChange = (selectedOrder: string) => {
    setSortOrder(selectedOrder as 'ASC' | 'DESC');
  };

  const handleAuthorFilterChange = (author: string) => {
    setSelectedAuthor(author);
  };

  const latestNews = posts.data?.slice().sort((a, b) => {
    const dateA = parseISO(a.publicationDate).getTime();
    const dateB = parseISO(b.publicationDate).getTime();
    return dateB - dateA;
  }).slice(0, 4);

  return (
    <PageWrapper>
      <Header />
      <ButtonGroupWrapper>
        <ButtonGroup>
          <FilterButton
            label={'Filtrar por autor'}
            options={authors.data?.authorPublications.map((author) => author.authorId) || []}
            onOptionClick={handleAuthorFilterChange}
          />
          <FilterButton
            label="Ordenar por"
            options={['ASC', 'DESC']}
            onOptionClick={handleSortOrderChange}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
      <ContentWrapper>
        <ArticlesSection>
          {posts.isLoading ? (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          ) : (
            sortedPosts?.map((article) => (
              <Article
                key={article.publicationId}
                authorName={article.author}
                publicationDate={format(new Date(article.publicationDate), 'dd/MM/yyyy', { locale: ptBR })}
                title={article.title}
                content={article.content}
              />
            ))
          )}
        </ArticlesSection>
        {posts.isLoading ? (
          <SpinnerWrapper>
            <Spinner />
          </SpinnerWrapper>
        ) : (
          <div>
            <News
              newsData={latestNews?.map((post) => ({
                title: post.title,
                date: format(new Date(post.publicationDate), 'dd/MM/yyyy'),
              })) || []}
            />
          </div>
        )}
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default App;

