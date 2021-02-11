import React from 'react';

export interface MyMessageProps {
    message: Message
}
 
const MyMessage: React.SFC<MyMessageProps> = ({ message }) => {

    return ( 
        <>
            {(message.attachments.length > 0) ? (
                <img className='message-image' src={message.attachments[0].file} 
                    alt="message-attachement" style={{float: 'right'}}/>
            ) : (
                <div className='message' style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3b2a50'}}>
                    {message.text}
                </div>
            )}
        </>
    );
}
 
export default MyMessage;
