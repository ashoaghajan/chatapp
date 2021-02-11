import React from 'react';

export interface ReadReceipesProps {
    message: Message,
    isMyMessage: boolean,
    chat: Chat
}
 
const ReadReceipes: React.SFC<ReadReceipesProps> = ({ message, isMyMessage, chat }) => {

    return ( 
        <>
            {chat.people.map((item, index) => item.last_read === message.id && (
               <div key={`read_${index}`} className='read-receipt' 
                style={{ float: isMyMessage ? 'right' : 'left', backgroundImage: `url(${item.person.avatar})` }}/>
            ))}
        </>
    );
}
 
export default ReadReceipes;
