import { NewsContainer, Title, NewsList, NewsItem, NewsTitle, NewsDate } from "./styles";

interface NewsProps {
  newsData: { title: string; date: string }[];
}

export function News({ newsData }: Readonly<NewsProps>) {
  return (
    <NewsContainer data-testid="news-section">
      <Title>Últimas notícias</Title>
      <NewsList>
        {newsData.map((news) => (
          <NewsItem key={news.title} data-testid="news-item">
            <NewsTitle>{news.title}</NewsTitle>
            <NewsDate>{news.date}</NewsDate>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
};
