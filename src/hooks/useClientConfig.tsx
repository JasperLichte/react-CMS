import { useState } from 'react';
import ClientConfig from '../models/ClientConfig';
import useJsonFile from './useJsonFile';

const useClientConfig = (): ClientConfig|null => {
    const configJson = useJsonFile('config.json');
    const [config, setConfig] = useState<ClientConfig|null>(null);
  
    if (configJson && !config) {
      setConfig(new ClientConfig().deserialize(configJson));
    }

    return config;
}

export default useClientConfig;
