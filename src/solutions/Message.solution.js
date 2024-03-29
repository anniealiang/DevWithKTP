import '../styles/global.css'

function Message({message}) {
    return (
        <div>
            <div className="message">
                <h1>Message Component</h1>
                <h1>{message}</h1>
            </div>
        </div>
    )
}

export default Message;

