import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BlogLandingPage from '../blog/landing_page/BlogLandingPage';
import BlogRouter from './BlogRouter';
import AuthRouter from './AuthRouter';
import Err404Page from '../placeholder/errors/404/Err404Page';
import { useDispatch } from 'react-redux';
import ActionType from '../../actions/ActionType';
import User from '../../models/user/User';
import Api from '../../api/Api';
import LoadingSpinner from '../placeholder/LoadingSpinner';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    checkLogin().then(user => {
      if (user !== null && user.notNull()) {
        dispatch({
          type: ActionType.SET_USER,
          user,
        });
      }
      setLoading(false);
    })
  }, [dispatch]);

  const router = (
    <Router>
      <Switch>
        <Route path="/blog">
          <BlogRouter />
        </Route>
        <Route path="/auth">
          <AuthRouter />
        </Route>
        <Route exact path="/">
          <BlogLandingPage />
        </Route>
        <Route path="*">
          <Err404Page />
        </Route>
      </Switch>
    </Router>);

    return (loading ? <LoadingSpinner /> : router)
}

const checkLogin = async (): Promise<User|null> => {
  const response = await Api.post('auth/check');
  const content = await response.json();

  if (content.user !== null) {
    const user = (new User()).deserialize(content.user);

    if (user.notNull()) {
      return user;
    }
  }
  return null;
}

export default Routes;
