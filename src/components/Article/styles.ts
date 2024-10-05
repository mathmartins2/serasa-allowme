import styled from 'styled-components';

export const Container = styled.div`
  max-width: 90%;
  padding: 20px 0;
  margin-left: 24px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.p`
  color: #e04c85;
  font-weight: 600;
  margin: 0;
  font-size: 16px;
`;

export const PublicationDate = styled.p`
  font-size: 14px;
  color: #58595d;
  margin: 0;
  font-weight: 600;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  color: #18191e;
`;

export const Content = styled.p`
  font-size: 16px;
  color: #58595d;
  line-height: 32px;
  font-weight: 400;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
  opacity: 1;
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconLink = styled.a`
  color: #555;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
