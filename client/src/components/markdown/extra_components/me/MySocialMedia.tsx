import React, { useState, useEffect } from 'react'
import LoadingSpinner from '../../../placeholder/LoadingSpinner'
import Api from '../../../../api/Api'
import './MySocialMedia.scss'

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
                : <>
                    {Object.keys(platforms).map(k => {
                        const url = linkByPlatform(k, platforms[k]);
                        const iconPath = iconByPlatform(k);
                        return url && iconPath
                            ? <a href={url} key={k} title={k}>
                                <img src={iconPath} alt={k} className={k} />
                            </a>
                            : null;
                    })}
                </>
            }
        </div>
    )
}

const linkByPlatform = (platform: string, userName: string): string => {
    if (!userName) {
        return '';
    }

    switch(platform.toLowerCase()) {
        case 'facebook': return `https://www.facebook.com/${userName}`;
        case 'github': return `https://github.com/${userName}`;
        case 'instagram': return `https://instagram.com/${userName}`;
        case 'strava': return `https://strava.com/athletes/${userName}`;
        case 'twitter': return `https://twitter.com/${userName}`;
        case 'email': return `mailto:${userName}`;
    }
    return '';
}

const iconByPlatform = (platform: string): string => {
    switch(platform.toLowerCase()) {
        case 'facebook': return '/assets/facebook.svg';
        case 'github': return '/assets/github.svg';
        case 'instagram': return '/assets/instagram.svg';
        case 'strava': return '/assets/strava.svg';
        case 'twitter': return '/assets/twitter.svg';
        case 'email': return '/assets/email.svg';
    }
    return '';
}

export default MySocialMedia
