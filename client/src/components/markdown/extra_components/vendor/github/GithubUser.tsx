import React from 'react'
import useGithubUserProfile from '../../../../../hooks/vendor/github/useGithubUserProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faGlobe, faSuitcase, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import './GithubUser.scss'
import LoadingSpinner from '../../../../placeholder/LoadingSpinner'

// <github-user>JasperLichte</github-user>

const GithubUser: React.FC<any> = ({children}) => {
    let userName = (Array.isArray(children) && children.length ? children[0] : '');
    userName = ((typeof userName === 'string') ? userName : '');

    const [ loading, user ] = useGithubUserProfile(userName);

    return (
        <div className={`github-user ${loading || !user ? 'loading' : ''}`}>
            {(!loading && user)
                ? <>
                    <div className="avatar-wrapper">
                        <img alt={user.getAvatarUrl()} className="avatar" src={user.getAvatarUrl()} />
                    </div>
                    <div className="info-wrapper">
                        <p className="name"><strong>{user.getName()}</strong> @{user.getLogin()}</p>
                        {user.getBio() && <blockquote className="bio">
                            {user.getBio()}
                        </blockquote>}
                        {user.getCompany() && <p className="company">
                            <FontAwesomeIcon icon={faSuitcase} />
                            {user.getCompany()}
                        </p>}
                        {user.getLocation() && <p className="location">
                            <FontAwesomeIcon icon={faGlobe} />
                            {user.getLocation()}
                        </p>}
                        {user.getEmail() && <a href={`mailto:${user.getEmail()}`} className="email">
                            <FontAwesomeIcon icon={faEnvelope} />
                            {user.getEmail()}
                        </a>}
                        {user.getBlog() && <a className="blog" href={`http://${user.getBlog()}`}>
                            <FontAwesomeIcon icon={faLink} />
                            {user.getBlog()}
                        </a>}
                    </div>
                </>
                : <LoadingSpinner />}
        </div>
    )
}

export default GithubUser
