import { useState, useEffect } from 'react';
import GithubUserProfile from '../../../models/vendor/github/GithubUserProfile';
import Config from '../../../models/Config';

const useGithubUserProfile = (userName: string): [boolean, GithubUserProfile|null] => {
    const [user, setUser] = useState<GithubUserProfile|null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!userName) {
            setUser(null);
            setIsLoading(false);
        }

        fetch(Config.serverBasePath() + `/vendor/github/user-profile/${userName}`)
            .then((r) => {
                if (!r.ok) {
                    throw new Error();
                }

                return r.json();
            })
            .then((p) => {
                if (p.id) {
                    setUser((new GithubUserProfile()).deserialize(p));
                }
                setIsLoading(false);
            })
            .catch(_ => {
                setUser(null);
                setIsLoading(false);
            });
    }, [userName]);

    return [isLoading, user];
}

export default useGithubUserProfile;
