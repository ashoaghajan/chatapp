import axios from 'axios';

export const login = async(userOjb: UserLogin, setError: React.Dispatch<React.SetStateAction<string>>) => {
    const { username, password } = userOjb;
    const authObject = { 'Project-ID': process.env.REACT_APP_PROJECT_ID, 'User-Name': username, 'User-Secret': password };

    try{
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
        localStorage.setItem('user', JSON.stringify(userOjb));
        window.location.reload();
    }
    catch(err){
        setError('Oops, incorrect credentials.')
        console.log(err)
    }
}