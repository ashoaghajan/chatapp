import React from 'react';
import MessageForm from './MessageForm';
import RenderMessages from './RenderMessages';
import ReadReceipes from './messages/ReadReceipes';

export interface ChatFeedProps {
    chats: Chat[], 
    activeChat: number, 
    userName: string, 
    messages: any,
    creds: any
}
 
const ChatFeed: React.SFC<ChatFeedProps> = (props) => {

    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];


    if(!chat) return <div>Loading ...</div>

    return ( 
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((item) => ` ${item.person.username}`)}
                </div>
            </div>

            <RenderMessages messages={messages} userName={userName} chat={chat}/>

            <div style={{ height: '100px' }}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    );
}
 
export default ChatFeed;
