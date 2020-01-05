import User from "../../models/user/User";
import { useState, useEffect } from "react";
import Api from "../../api/Api";

const useFetchAuthenticatedUser = (): [boolean, User|null] => {
    const [ loading, setLoading ] = useState(true);
    const [ user, setUser ] = useState<User|null>(null);
  
    useEffect(() => {
      checkLogin().then(user => {
        if (user !== null && user.notNull()) {
            setUser(user);
        }
        setLoading(false);
      })
    }, [setLoading, setUser]);

    return [loading, user]
}

const checkLogin = async (): Promise<User|null> => {
  const response = await Api.post('auth/check');
  const content = await response.json();

  if (content.user !== null) {
    const user = (new User()).deserialize(content.user);

    if (user.notNull()) {
      return user;
    }
  }
  return null;
}

export default useFetchAuthenticatedUser;
