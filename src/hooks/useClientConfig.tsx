import { useState } from 'react';
import Config from '../models/ClientConfig';
import useJsonFile from './useJsonFile';

const useClientConfig = (): Config|null => {
    const configJson = useJsonFile('config.json');
    const [config, setConfig] = useState<Config|null>(null);
  
    if (configJson && !config) {
      setConfig(new Config().deserialize(configJson));
    }

    return config;
}

export default useClientConfig;
