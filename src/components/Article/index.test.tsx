import { render, screen } from '@testing-library/react';
import { Article } from './';
import { describe, it, expect } from 'vitest';

const mockArticle = {
  authorName: 'John Doe',
  publicationDate: '2023-10-01',
  title: 'Test Title',
  content: 'This is the content of the article.',
};

describe('Article Component', () => {
  it('should render the author name and publication date', () => {
    render(<Article {...mockArticle} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('2023-10-01')).toBeInTheDocument();
  });

  it('should render the title and content of the article', () => {
    render(<Article {...mockArticle} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('This is the content of the article.')).toBeInTheDocument();
  });

  it('should render the social media icons', () => {
    render(<Article {...mockArticle} />);

    const twitterIcon = screen.getByLabelText('Twitter');
    const linkedInIcon = screen.getByLabelText('LinkedIn');
    const linkIcon = screen.getByLabelText('Link');

    expect(twitterIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
    expect(linkIcon).toBeInTheDocument();
  });
});
