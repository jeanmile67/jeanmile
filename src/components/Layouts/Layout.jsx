import React from 'react';
import { TypographyStyle } from 'react-typography';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/globalStyle';
import typography from '../../utils/typography';
import defaultTheme from '../../theme/defaultTheme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TypographyStyle typography={typography} />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
