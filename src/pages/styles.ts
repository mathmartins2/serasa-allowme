import { keyframes, styled } from 'styled-components';

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.greenTextColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const ArticlesSection = styled.div`
  width: 100%;
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`;
