import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App () {
    
    const formatUserName = (userName) => `@${userName}`
    
    return(
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} name="Miguel Ángel Durán"/>
        </section>
    )
}