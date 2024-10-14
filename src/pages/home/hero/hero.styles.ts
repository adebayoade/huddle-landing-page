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

  p {
    font-weight: 600;
    line-height: 1.5;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  margin-left: auto;
`;
