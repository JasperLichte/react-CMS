import React from 'react'
import GoogleMapReact from 'google-map-react'
import useGoogleMapsApiKey from '../../../../../../hooks/vendor/google/useGoogleMapsApiKey'
import googleMapsOptions from './googleMapsOption'
import './GoogleMap.scss'

const GoogleMap: React.FC<any> = ({
    height,
    zoom,
    lat,
    lng,
}) => {
    height = parseInt(height);
    zoom = parseInt(zoom) || 10;
    lat = parseFloat(lat) || 53.551086;
    lng = parseFloat(lng) || 9.993692;

    const apiKey = useGoogleMapsApiKey();

    return (
        <div
            className={`google-map ${!apiKey ? 'loading' : ''}`}
            style={{height: `${height}px` || undefined}}
        >
            {apiKey && <GoogleMapReact
                bootstrapURLKeys={{key: apiKey}}
                defaultCenter={{lat: 53.551086, lng: 9.993692}}
                center={{lat, lng}}
                zoom={zoom}
                options={googleMapsOptions}
            />}
        </div>
    );  
}

export default GoogleMap
