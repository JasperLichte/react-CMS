import { useState, useEffect } from "react";
import Me from "../../models/config/Me";
import Api from "../../api/Api";

const useFetchMe = (): [boolean, Me|null] => {
    const [ loading, setLoading ] = useState(true);
    const [ me, setMe ] = useState<Me|null>(null);
  
    useEffect(() => {
        Api.get('config/me')
        .then(r => r.json())
        .then(_me => {
            if (_me) {
                setMe((new Me()).deserialize(_me));
            }
            setLoading(false);
        });
    }, [setLoading, setMe]);

    return [loading, me];
}

export default useFetchMe;
