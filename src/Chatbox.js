import React, { useState } from 'react';
import './Chatbox.css';
import App from './App';

function Chatbox() {

  const [text, setText] = useState("")

  const [lines, setLines] = useState(["msg1" , "msg2" , "msg3" , "msg4" , "msg5"]);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  const onSend = () => {
    setLines(lines => [...lines, text]);
    setText("");
  };

  return (
      <App>
    <div className="App">
      <div className="App-content">
      {
        lines.map(x =>{
          return <div className="App-chatroom-text">
                  {x}
                  </div>
        }) 
      }
      </div>
      <div className="App-textbox">
        <button class="btn"><i>More Function</i></button>
        <input type="text" className="App-textbox-input" value={text} onChange={onTextChange} placeholder="Type a message" />
        <button className="App-textbox-send" button onClick={onSend}>Send</button>
      </div>
    </div>
    </App>
  );
}

export default Chatbox;
