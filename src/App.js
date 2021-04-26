import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="d2c986dc-2620-4772-b35c-298833409331"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
            />
        </div>
    )
}

export default App
