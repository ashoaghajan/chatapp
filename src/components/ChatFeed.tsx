import React from 'react';
import MessageForm from './MessageForm';
import RenderMessages from './RenderMessages';

export interface ChatFeedProps {
    chats: Chat[], 
    activeChat: any, 
    userName: string, 
    messages: any
}
 
const ChatFeed: React.SFC<ChatFeedProps> = (props) => {

    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    console.log(chat)

    if(!chat) return <div>Loading ...</div>

    return ( 
        <div className='chat-feed'>
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            <RenderMessages messages={messages} userName={userName}/>
            <div style={{ height: '100px' }}/>
            <div className="message-form-container">
                <MessageForm {...props}/>
            </div>
        </div>
    );
}
 
export default ChatFeed;
