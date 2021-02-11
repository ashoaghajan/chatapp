import React from 'react';

export interface TheirMessageProps {
    message: Message
    lastMessage: Message
}
 
const TheirMessage: React.SFC<TheirMessageProps> = ({ message, lastMessage }) => {

    const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username

    return ( 
        <div className='message-row'>
            {isFirstMessage && (
                <div className='message-avatar' style={{ backgroundImage: `url(${message.sender.avatar})` }}/>
            )}
            
            {(message.attachments.length > 0) ? (
                <img className='message-image' src={message.attachments[0].file} 
                    alt="message-attachement" style={{marginLeft: isFirstMessage ? '4px' : '48px'}}/>
            ) : (
                <div className='message' style={{float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessage ? '4px' : '48px'}}>
                    {message.text}
                </div>
            )}
        </div>
     );
}
 
export default TheirMessage;
