import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import { theme } from './theme';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
