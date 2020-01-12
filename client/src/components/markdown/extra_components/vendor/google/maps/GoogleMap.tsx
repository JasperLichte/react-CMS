import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import useGoogleMapsApiKey from '../../../../../../hooks/vendor/google/useGoogleMapsApiKey'
import googleMapsOptions from './googleMapsOption'
import './GoogleMap.scss'
import LoadingSpinner from '../../../../../placeholder/LoadingSpinner'

const GoogleMap: React.FC<any> = ({
    height,
    zoom,
    lat,
    lng,
}) => {
    const [currentZoom, setCurrentZoom] = useState(1);

    useEffect(() => {
        if(Math.abs(currentZoom - zoom) > 0.2) {
            setTimeout(() => {
                setCurrentZoom(currentZoom + 0.15 * (currentZoom < zoom ? 1 : -1));
            }, 20);
        } else if (currentZoom !== zoom) {
            setCurrentZoom(zoom);
        }
    }, [currentZoom, setCurrentZoom, zoom]);

    zoom = parseFloat(zoom) || 10;
    height = parseInt(height);
    lat = parseFloat(lat) || 53.551086;
    lng = parseFloat(lng) || 9.993692;

    const apiKey = useGoogleMapsApiKey();

    return (
        <div
            className='google-map'
            style={{height: height ? `${height}px` : undefined}}
        >
            {apiKey
                ? <GoogleMapReact
                    bootstrapURLKeys={{key: apiKey}}
                    defaultCenter={{lat: 53.551086, lng: 9.993692}}
                    center={{lat, lng}}
                    zoom={currentZoom}
                    options={googleMapsOptions}
                />
                : <LoadingSpinner />}
        </div>
    );  
}

export default GoogleMap
