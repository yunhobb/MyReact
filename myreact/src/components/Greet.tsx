type Greetprops = {
    name: String 
}

export const Greet = (props: Greetprops) => {
    return (
        <div>
            <h2>Welcome {props.name}! You havve 10 unread message</h2>
        </div>
    )
} 
