type Greetprops = {
    name: String 
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: Greetprops) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn  
                    ? `Welcome ${props.name}! You havve ${props.messageCount} unread message` 
                    : 'Welcome Guest'
                }
                
            </h2>
        </div>
    )
} 
