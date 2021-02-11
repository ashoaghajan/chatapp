import React from 'react';
import MyMessage from './messages/MyMessage';
import TheirMessage from './messages/TheirMessage';
import ReadReceipes from './messages/ReadReceipes';

export interface RenderMessagesProps {
    userName: string,
    messages: any,
    chat: Chat
}
 
const RenderMessages: React.SFC<RenderMessagesProps> = ({ userName, messages, chat }) => {

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
                               <MyMessage message={message}/> 
                            ): (
                                <TheirMessage message={message} lastMessage={messages[lastMessageKey!]}/>
                            )}
                        </div>
                        <div className="read-receipes" style={receipesStyle}>
                            <ReadReceipes message={message} isMyMessage={isMyMessage} chat={chat}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default RenderMessages;
