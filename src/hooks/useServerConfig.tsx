import { useState, useEffect } from 'react';
import useJsonFile from './useJsonFile';
import ServerConfig from '../models/ServerConfig';

const useServerConfig = (filePath: string): ServerConfig|null => {
  const [config, setConfig] = useState<ServerConfig|null>(null);
  const configJson = useJsonFile(filePath);

  useEffect(() => {
    if (configJson && !config) {
      setConfig(new ServerConfig().deserialize(configJson));
    }

  }, [filePath, config, configJson]);

  return config;
}

export default useServerConfig;
