import { useState, useEffect } from 'react';
import Config from '../../../models/Config';

const useGoogleMapsApiKey = (): string => {
    const [key, setKey] = useState('');

    useEffect(() => {
        fetch(Config.serverBasePath() + '/vendor/google/maps/api-key')
        .then((r) => r.json())
        .then((p) => {
            if (p.key) {
                setKey(p.key);
            }
        })
        .catch(_ => setKey(''));
    }, []);

    return key;
};

export default useGoogleMapsApiKey;
