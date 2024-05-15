function Tweet({ date, message, name, username }) {
    return (
        <div className="tweet_div">
            <span className="name">{name}</span>
            <span className="username">{username}</span>
            <span className="date">{date}</span>
            <p className="message">{message}</p>
        </div>
    )
}