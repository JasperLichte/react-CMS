import React from 'react'
import useGithubUserProfile from '../../../../hooks/vendor/github/useGithubUserProfile'
import './GithubUser.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faGlobe, faSuitcase } from '@fortawesome/free-solid-svg-icons'

// <github-user name="JasperLichte"></github-user>

const GithubUser: React.FC<any> = ({name}) => {
    const [ loading, user ] = useGithubUserProfile(name);

    return (
        <div className={`github-user ${loading || !user ? 'loading' : ''}`}>
            {loading || !user
                ? <span className="loading-spinner"></span>
                : <>
                    <div className="avatar-wrapper">
                        <img alt={user.getAvatarUrl()} className="avatar" src={user.getAvatarUrl()} />
                    </div>
                    <div className="info-wrapper">
                        <p className="name"><strong>{user.getName()}</strong> @{user.getLogin()}</p>
                        {user.getCompany() && <p className="company">
                            <FontAwesomeIcon icon={faSuitcase} />
                            {user.getCompany()}
                        </p>}
                        {user.getLocation() && <p className="location">
                            <FontAwesomeIcon icon={faGlobe} />
                            {user.getLocation()}
                        </p>}
                        {user.getBlog() && <a className="blog" href={user.getBlog()}>
                            <FontAwesomeIcon icon={faLink} />
                            {user.getBlog()}
                        </a>}
                    </div>
                </>}
        </div>
    )
}

export default GithubUser
