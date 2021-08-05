import { ChatEngine } from 'react-chat-engine';
import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height = "100vh"
            projectID="b79e5df5-1cd5-4f0f-bd24-4fca792f3d47"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );
}

export default App;