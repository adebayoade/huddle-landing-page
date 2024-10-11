import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  body {
    margin:0;
    font-family: 'Open-Sans', sans-serif;
    font-size: 18px;
    background-color: ${props => props.theme.colors.default};
    color: #020817;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    paleCyan: 'hsl(193, 100%, 96%)',
    darkCyan: 'hsl(192, 100%, 9%)',
    grayishBlue: 'hsl(208, 11%, 55%)',
    default: 'hsl(0, 0%, 100%)',
  },
  container: {
    width: '1440px',
  },
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />;
      </ThemeProvider>
    </>
  );
}
