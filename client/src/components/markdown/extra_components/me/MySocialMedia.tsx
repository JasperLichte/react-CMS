import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../../../placeholder/LoadingSpinner';
import Api from '../../../../api/Api';

const MySocialMedia = () => {
    const [loading, setLoading] = useState(true);
    const [platforms, setPlatforms] = useState<{[key: string]: string}>({});

    useEffect(() => {
        Api.get('about/me/social-media')
        .then(r => r.json())
        .then(r => {
            if (!r.error && r['social-media']) {
                setPlatforms(r['social-media']);
            }
            setLoading(false);
        })
    }, [setPlatforms]);

    return (
        <div className="my-social-media">
            {loading
                ? <LoadingSpinner />
                : <p>{JSON.stringify(platforms)}</p>
            }
        </div>
    )
}

export default MySocialMedia
