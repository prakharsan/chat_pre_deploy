import React from "react";
const MessageForm = ({lastMessage, message}) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    //gives boolean value which tells us if this is the first message by the user or not

    return(
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{backgroundImage: message.sender.avatar && `url(${message.sender.avatar})`}
                    }
                />
            )}

        {message.attachments.length > 0

        ? (
            <img 
                src={message.attachments[0].file}
                alt = "message-attachment"
                className="message-image"
                style={{marginLeft:isFirstMessageByUser ? '4px' : '48px'}}
            />
        ) : (
            <div className="message" style={{ float:'left',color:'white', backgroundColor:'#3B2A50', marginLeft:isFirstMessageByUser ? '4px' : '48px'}}>
            {message.text}
            </div>
        )
    }
        </div>
    )
}

export default MessageForm;