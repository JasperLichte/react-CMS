import React from 'react'
import useGithubUserProfile from '../../../../hooks/vendor/github/useGithubUserProfile'

const GithubUser: React.FC<any> = ({name}) => {
    const [ loading, user ] = useGithubUserProfile(name);

    console.log(user)

    return (
        <div className="github-user">
            {loading || !user
                ? 'loading..'
                : <>
                    <p className="name">{user.getName()}</p>
                    <p className="company">{user.getCompany()}</p>
                    <p className="location">{user.getLocation()}</p>
                    <p><a className="blog" href={user.getBlog()}>{user.getBlog()}</a></p>
                    <img alt={user.getAvatarUrl()} className="avatar" src={user.getAvatarUrl()} />
                </>}
        </div>
    )
}

export default GithubUser
