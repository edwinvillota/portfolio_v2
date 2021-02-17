import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from 'styles/themes';
import { GlobalStyle } from 'styles/Global';

import { AppTemplate } from 'components/templates';

import { About, Dashboard, Users, Home } from 'components/views';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      <Router>
        <AppTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users" component={Users} />
          </Switch>
        </AppTemplate>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
