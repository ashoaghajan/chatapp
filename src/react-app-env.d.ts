declare module 'react-chat-engine';

type Person = {
    username: string,
    first_name: string,
    last_name: string,
    is_online: boolean,
    avatar: string
}

type PersonInfo = {
    last_read: number,
    person: Person
}

interface Message {
    attachments: any[],
    created: Date,
    id: number,
    sender: Person,
    text: string
}

interface Chat {
    attachments: any[],
    created: Date,
    id: number,
    lastMessage: Message
    people: PersonInfo[]
    title: string
}