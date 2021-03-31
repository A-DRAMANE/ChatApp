import React from 'react'

const TheirMessage = (lastMessage,message) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {<div
                className="message-avatar"
                style={{backgroundImage:'url(${message?.sender?.avatar})'}}
            />}

            {message?.attachment?.length>0
                ?(
                    <img
                        src={message.attachment[0].fille}
                        alt="message attachment"
                        className="message-image"
                        style={{marginLeft:isFirstMessageByUser ? "4px" : "48px"}}
                    />
                ) : (
                    <div className="message" style={{float:"left", color:"white",backgroundColor:"#CABCDC",marginLeft:isFirstMessageByUser ? "4px" : "48px"}}>
                        {message.texte}
                    </div>
                )
        }
        </div>
    )
}

export default TheirMessage