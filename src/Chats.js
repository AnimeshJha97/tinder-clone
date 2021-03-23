import React from 'react';
import Chat from './Chat.js';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name = "Mark"
                message = "Yo waddup"
                timeStamp = "10 sec ago"
                profilePic = "https://cdn.pixabay.com/photo/2013/07/13/14/01/leprechaun-161943__480.png"
            />
            <Chat 
                name = "Marklen"
                message = "Yo waddup"
                timeStamp = "20 sec ago"
                profilePic = "https://cdn.pixabay.com/photo/2017/04/04/17/55/people-2202472__480.jpg"
            />
            <Chat 
                name = "Markpant"
                message = "Yo waddup"
                timeStamp = "30 sec ago"
                profilePic = "https://cdn.pixabay.com/photo/2013/07/18/20/24/brad-pitt-164880__480.jpg"
            />
            <Chat 
                name = "Marktod"
                message = "Yo waddup"
                timeStamp = "40 sec ago"
                profilePic = "https://cdn.pixabay.com/photo/2016/03/31/20/57/captain-1296107__480.png"
            />
        </div>
    )
}

export default Chats
