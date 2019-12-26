import React from 'react';
import BlogEntry from './blog/entry/BlogEntry';
import BlogLandingPage from './blog/landing_page/BlogLandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Routes: React.FC = () => (
<Router>
  <Switch>
    <Route path="/blog/:date">
      <BlogEntry />
    </Route>
    <Route path="/blog">
      <BlogLandingPage />
    </Route>
    <Route path="/">
      <BlogLandingPage />
    </Route>
  </Switch>
</Router>);

export default Routes;
