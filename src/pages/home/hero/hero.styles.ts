import styled from 'styled-components';

export const HeroSection = styled.section`
  background-color: ${({ theme }) => theme.colors.poleCyan};
`;

export const HeroContainer = styled.div`
  background-image: url('/bg-hero-desktop.svg');
  height: 650px;
  margin: auto;
  max-width: ${({ theme }) => theme.container.width};
  padding: 20px;

  button {
    width: max-content;
  }

  @media (max-width: 1024px) {
    height: unset;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: auto 750px;
  justify-content: 'space-between';
  align-items: center;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 50px;
    margin: 0;
    line-height: 1.5;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-weight: 600;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  margin-left: auto;
`;
