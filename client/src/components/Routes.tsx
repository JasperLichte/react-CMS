import React from 'react';
import BlogPost from './blog/post/BlogPost';
import BlogLandingPage from './blog/landing_page/BlogLandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewPost from './blog/new_post/NewPost';

const Routes: React.FC = () => (
<Router>
  <Switch>
    <Route path="/blog/new">
      <NewPost />
    </Route>
    <Route path="/blog/:id">
      <BlogPost />
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
