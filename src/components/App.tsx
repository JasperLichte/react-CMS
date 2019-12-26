import React from 'react';
import Routes from './Routes';
import useConfig from '../hooks/config/useConfig';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/reducer'
import ActionType from '../actions/ActionType';
import './App.scss';

const store = createStore(reducer)

const App: React.FC = () => {
  const config = useConfig();

  if (config) {
    store.dispatch({type: ActionType.SET_CONFIG, config});
  }

  return (
    <Provider store={store}>
      {config ? <Routes /> : <p>loading...</p>}
    </Provider>
  );
}

export default App;
