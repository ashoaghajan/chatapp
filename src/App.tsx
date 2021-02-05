import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine 
      height='100vh'
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName='ashojano'
      userSecret={process.env.REACT_APP_USER_SECRET}
      renderChatFeed={(chatAppProps: any) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
