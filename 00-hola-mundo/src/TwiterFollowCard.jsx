import { useState } from 'react';

export function TwitterFollowCard({ children, userName, initialIsFollowing}) {
    const [isFollowing, setFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';

    const handleClick = () => {
        setFollowing(!isFollowing);
    }

    const userNameInfo = `@${userName}`;
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="chica" />
                <div className='tw-followCard-info'>
                        {children}
                    <span className='tw-followCard-infoUsername'>{userNameInfo}</span>
                </div>
            </header>


            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}