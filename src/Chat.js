import React from 'react'
import Avatar from"@material-ui/core/Avatar";
import { Link} from 'react-router-dom';
import './Chat.css';
function Chat({name, message, profilePic, timeStamp}) {
    return (
        <Link to = {`/chat/${name}`}>
            <div className="chat">
                <Avatar className = "chat__image" atr={name} src={profilePic} />
                <div className = "chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className = "chat__timeStamp">{timeStamp}</p>
            </div>
        </Link>
        
    )
}

export default Chat
