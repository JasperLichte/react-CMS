import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import NewPostPage from '../blog/edit_post/new_post/NewPostPage'
import EditPostPage from '../blog/edit_post/edit_post/EditPostPage'
import BlogPostPage from '../blog/post/BlogPostPage'
import BlogLandingPage from '../blog/landing_page/BlogLandingPage'
import Err404Page from '../placeholder/errors/404/Err404Page'

const BlogRouter = () => {
  const {path} = useRouteMatch();

  return (<Switch>
    <Route path={`${path}/new`}>
      <NewPostPage />
    </Route>
    <Route path={`${path}/:id/edit`}>
      <EditPostPage />
    </Route>
    <Route path={`${path}/:id`}>
      <BlogPostPage />
    </Route>
    <Route path={`${path}/`}>
      <BlogLandingPage />
    </Route>
    <Route path={`${path}/*`}>
      <Err404Page />
    </Route>
  </ Switch>)
}

export default BlogRouter
