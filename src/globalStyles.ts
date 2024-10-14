import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }

  body {
    font-size: 18px;
    background-color: ${props => props.theme.colors.default};
    color: ${props => props.theme.colors.fontColor};
    font-family: "Open Sans", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 600;
  color: ${props => props.theme.colors.darkCyan};

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const SecondTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.colors.darkCyan};

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1366px;
  margin: auto;
  padding: 20px;
`;
