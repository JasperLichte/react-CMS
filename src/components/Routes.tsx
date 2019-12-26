import React from 'react';
import Blog from './blog/Blog';
import BlogEntry from './blog/entry/BlogEntry';
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
      <Blog />
    </Route>
    <Route path="/">
    </Route>
  </Switch>
</Router>);

export default Routes;
