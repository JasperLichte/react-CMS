import React from 'react';
import ClientConfig from './models/ClientConfig';
import Blog from './components/Blog';
import useClientConfig from './hooks/useClientConfig';
import ServerConfig from './models/ServerConfig';
import useServerConfig from './hooks/useServerConfig';

const App: React.FC = () => {
  const clientConfig: ClientConfig|null = useClientConfig();
  const serverConfig: ServerConfig|null = useServerConfig(
    clientConfig
    ? `${clientConfig.server.base_path}${clientConfig.server.config_location}`
    : ''
  );

  return (clientConfig && serverConfig ? (<Blog
    clientConfig={clientConfig}
    serverConfig={serverConfig}
  />) : <p>loading...</p>);
}

export default App;
