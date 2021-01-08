import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../style/globalStyle';
import typography from '../../utils/typography';
import defaultTheme from '../../theme/defaultTheme';

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <GlobalStyle />
    <main>{children}</main>
  </ThemeProvider>
);

export default Layout;
