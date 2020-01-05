import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BlogRouter from './BlogRouter';
import AuthRouter from './AuthRouter';
import Err404Page from '../placeholder/errors/404/Err404Page';
import { useDispatch } from 'react-redux';
import ActionType from '../../actions/ActionType';
import LoadingSpinner from '../placeholder/LoadingSpinner';
import useFetchAuthenticatedUser from '../../hooks/auth/useFetchAuthenticatedUser';
import useFetchMe from '../../hooks/config/useFetchMe';
import LandingPage from '../landing_page/LandingPage';
import AboutMePage from '../about/AboutMePage';

const Routes: React.FC = () => {
  const [ userIsLoading, user ] = useFetchAuthenticatedUser();
  const [ meIsLoading, me ] = useFetchMe();
  const [ loading, setLoading ] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(userIsLoading || meIsLoading);
  }, [userIsLoading, meIsLoading]);

  if (!userIsLoading && user) {
    dispatch({
      type: ActionType.SET_USER,
      user,
    });
  }

  if (!meIsLoading && me) {
    dispatch({
      type: ActionType.SET_ME,
      me,
    });
  }

    return (loading
            ? <LoadingSpinner />
            : (<Router>
                <Switch>
                  <Route path="/about">
                    <AboutMePage />
                  </Route>
                  <Route path="/blog">
                    <BlogRouter />
                  </Route>
                  <Route path="/auth">
                    <AuthRouter />
                  </Route>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route path="*">
                    <Err404Page />
                  </Route>
                </Switch>
              </Router>));
}

export default Routes;
