import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from 'styles/themes';
import { GlobalStyle } from 'styles/Global';

import { Home } from 'components/views';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
