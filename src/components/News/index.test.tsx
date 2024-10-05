import { render, screen } from '@testing-library/react';
import { News } from './';
import { describe, it, expect } from 'vitest';

const mockNewsData = [
  { title: 'Notícia 1', date: '2023-10-01' },
  { title: 'Notícia 2', date: '2023-09-28' },
];

describe('News Component', () => {
  it('should render the title "Últimas notícias"', () => {
    render(<News newsData={mockNewsData} />);

    expect(screen.getByText('Últimas notícias')).toBeInTheDocument();
  });

  it('should render the list of news with their titles and dates', () => {
    render(<News newsData={mockNewsData} />);

    mockNewsData.forEach(news => {
      expect(screen.getByText(news.title)).toBeInTheDocument();
      expect(screen.getByText(news.date)).toBeInTheDocument();
    });
  });

  it('should not render any news if newsData is empty', () => {
    render(<News newsData={[]} />);

    const newsItems = screen.queryAllByRole('listitem');
    expect(newsItems).toHaveLength(0);
  });
});
