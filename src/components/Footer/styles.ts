import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.footerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  margin-top: 60px;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Copyright = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 400;
  line-height: 19.36px;
`;
