import React from 'react';
import { useState } from "react";
import Avatar from"@material-ui/core/Avatar";
import './ChatScreen.css';
function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name : 'Mark',
            image : 'https://cdn.pixabay.com/photo/2013/07/13/14/01/leprechaun-161943__480.png',
            message : 'Waddup......1' 
        },
        {
            name : 'Mark',
            image : 'https://cdn.pixabay.com/photo/2013/07/13/14/01/leprechaun-161943__480.png',
            message : 'Waddup........2' 
        },
        {
            message : 'Waddup.........3' 
        },
    ])

    const handleSend = e => {
        e.preventDefault();
        // If we don't use preventDefault, the screen will refresh everytime
        // the message is send and currently we are not adding the message
        // to the database so initial message screen will pop up
        setMessages([...messages, {message : input}]);
        setInput("");
    };

    return (
        <div className = "chatScreen">
            <p className = "chatScreen__timeStamp">You Matched on 20 March</p>
            {messages.map((message) => 
                message.name ? (                
                <div className = "chatScreen__message">
                    <Avatar 
                        className = "chat__image" 
                        alt={message.name} 
                        src={message.image} 
                    />
                    <p className = "chatScreen__text">{message.message}</p>
                </div>
            ) : (
                <div className = "chatScreen__message">
                    <p className = "chatScreen__textUser">{message.message}</p>
                </div>
            ))}

            <form className = "chatScreen__input">
                <input 
                    value = {input} 
                    onChange = {(e) => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    placeholder = "Type a message..." 
                    type = "text"
                />
                <button 
                    onClick = {handleSend}
                    type = "submit"
                    className = "chatScreen__inputButton">SEND
                </button>
            </form>
        </div>
    );
}

export default ChatScreen
