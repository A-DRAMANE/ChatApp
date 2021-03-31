import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import './App.css'
const App = () => {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="d2c986dc-2620-4772-b35c-298833409331"
                userName="fils_du_Faso"
                userSecret="123123"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
                />}
            />
        </div>
    )
}

export default App
