import './App.css';
import { TwitterFollowCard } from './TwiterFollowCard';

const users = [
    {
        id:1,
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        id:2,
        userName: 'pheralb',
        name: 'Pablo Pheralb',
        isFollowing: false,
    },
    {
        id:3,
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true,
    },
    {
        id:4,
        userName: 'TMChein',
        name: 'Thomas Chein',
        isFollowing: false,
    },
];

export function App() {
    return (
        <section className='App'>
            {
                users.map(({id, userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={id}
                            userName={userName}
                            initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}