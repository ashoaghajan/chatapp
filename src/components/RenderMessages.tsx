import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

export interface RenderMessagesProps {
    userName: string,
    messages: any
}
 
const RenderMessages: React.SFC<RenderMessagesProps> = ({ userName, messages }) => {

    const keys = Object.keys(messages);

    return ( 
        <div>
            {keys.map((key, index) => {
                const message: Message = messages[key];
                const lastMessageKey = index === 0 ? null : keys[index -1];
                const isMyMessage = userName === message.sender.username;
                const receipesStyle = {
                    marginRight: isMyMessage ? '18px' : '0px',
                    marginLeft: isMyMessage ? '0px' : '68px'
                };

                return (
                    <div key={`msg_${index}`} style={{ width: '100%'}}>
                        <div className="message-block">
                            {isMyMessage ? (
                               <MyMessage /> 
                            ): (
                                <TheirMessage />
                            )}
                        </div>
                        <div className="read-receipes" style={receipesStyle}>
                            read-receipes
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default RenderMessages;
