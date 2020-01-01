import { useState, useEffect } from 'react';
import Api from '../../../api/Api';

const useGoogleMapsApiKey = (): string => {
    const [key, setKey] = useState('');

    useEffect(() => {
        Api.get('vendor/google/maps/api-key')
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
