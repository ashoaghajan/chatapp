import React from 'react';

export interface MessageFormProps {
    chats: Chat[], 
    activeChat: any, 
    userName: string, 
    messages: any
}
 
const MessageForm: React.SFC<MessageFormProps> = () => {
    return ( 
        <div>
            MessageForm
        </div>
     );
}
 
export default MessageForm;
