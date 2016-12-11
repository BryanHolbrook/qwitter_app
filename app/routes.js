import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import About from './components/About';
import Users from './components/Users';
import Songs from './components/Songs';
import Song from './components/Song';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="/songs" component={Songs} />
      <Route path="/songs/:id" component={Song} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
)
