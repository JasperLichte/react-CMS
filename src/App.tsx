import React from 'react';
import Blog from './components/Blog';
import useConfig from './hooks/useConfig';

const App: React.FC = () => {
  const config = useConfig();

  return (config
    ? (<Blog config={config} />)
    : <p>loading...</p>);
}

export default App;
