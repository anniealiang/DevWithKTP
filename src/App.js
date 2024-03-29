import './styles/global.css'
import Checklist from './components/Checklist'
import "@fontsource/nunito-sans";
import React, { useState } from 'react'
import Message from './components/Message';
import MessageSender from './components/MessageSender';


function App() {
  // Exercise 4:
  // Allow the "Send Message to Message Component" button to display the message typed in the Checklist component in the Message component.
  const [message, setMessage] = useState("")

  // Hint: put relevant state and state "setters" to the parent of both components and pass down needed state and state "setters" down to the respective components.
  return (
    <div className='parent'>
      <div className="component-relations">
        <Checklist />
        <MessageSender setMessage={setMessage}/>
        <Message message={message} />
      </div>
    </div>
  );
}

export default App;
