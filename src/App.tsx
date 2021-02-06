import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from 'styles/themes';
import { GlobalStyle } from 'styles/Global';
import { Text } from 'components/atoms';

const App: React.FC = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={LightTheme}>
      <Text />
    </ThemeProvider>
  </div>
);

export default App;
