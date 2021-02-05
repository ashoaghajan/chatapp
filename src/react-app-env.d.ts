declare module 'react-chat-engine';

type Message = {
    id: number,
    sender: {
        username: string
    },
    created: Date,
    text: string
}

type Person = {
    person: {
        username: string
    }
}

type Chat = {
    title: string,
    people: Person[]
}