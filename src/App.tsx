import { useEffect, useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  const [userObj, setUserObj] = useState({ username: '', password: '' })

  useEffect(() => {
    const data = localStorage.getItem('user');
    if(data) setUserObj(JSON.parse(data));
  },[]);

  if(!userObj.username) return <LoginForm />

  return (
    <ChatEngine 
      height='100vh'
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={userObj.username}
      userSecret={userObj.password}
      renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
