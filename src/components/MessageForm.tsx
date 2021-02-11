import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

export interface MessageFormProps {
    chats: Chat[], 
    activeChat: number, 
    userName: string, 
    messages: any,
    chatId: any,
    creds: any
}
 
const MessageForm: React.SFC<MessageFormProps> = (props) => {

    const [message, setMessage] = useState('');
    const { chatId, creds } = props;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
        isTyping(props, chatId)
    }

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        sendMessage(creds, chatId, { files, text: '' });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> |  React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const text = message.trim();
        if(text.length) sendMessage(creds, chatId, { text });
        setMessage('');
    }


    return ( 
        <form className='message-form' onSubmit={handleSubmit}>
            <input className='message-input' placeholder='Send a message ...' 
                value={message} onChange={handleChange} onSubmit={handleSubmit}/>

            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureOutlined className='picture-icon'/>
                </span> 
            </label>  
            <input type='file' multiple={false} id='upload-button' style={{display: 'none'}}
                onChange={handleUpload}/> 

            <button type='submit' className='send-button'>
                <SendOutlined className='send-icon'/>
            </button>    
        </form>
     );
}
 
export default MessageForm;
