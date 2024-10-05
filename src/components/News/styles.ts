import styled from 'styled-components';

export const NewsContainer = styled.div`
  background-color: #f4f4fa;
  padding: 20px;
  border-radius: 8px;
  width: 330px;
  margin-right: 24px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #18191e;
`;

export const NewsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NewsItem = styled.li`
  border: 1px solid #cdcddf;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 10px;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const NewsTitle = styled.p`
  font-size: 16px;
  color: #2d2e30;
  margin: 0;
  font-weight: 600;
  line-height: 20px;
`;

export const NewsDate = styled.p`
  font-size: 14px;
  color: #e04c85;
  margin: 5px 0 0;
  font-weight: 600;
  line-height: 20px;
`;
