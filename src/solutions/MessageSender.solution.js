import React, { useState } from 'react'

function MessageSender({setMessage}) {
    const [messageInput, setMessageInput] = useState("");
    return <div>
        <div className="checklist-card">
            <h1 className="list-header">Send A Message To Your Future Self</h1>
            <div className="buttons-panel">
                <input className="inputs" value={messageInput} onChange={(e) => { setMessageInput(e.target.value)}} />
                <button
                    className="inputs"
                    onClick={() => setMessage(messageInput)}
                >
                    Send Message to Message Component
                </button>
            </div>
        </div>
    </div>
}

export default MessageSender


