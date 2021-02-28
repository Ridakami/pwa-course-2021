import React, { useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {

  const [text, setText] = useState("");
  const [lines, setLines] = useState(["Please Enter Your Massage",""]);

  const onChangeHandler = (event) => {
      setText(event.target.value);
  };

  const onSendHandler = (event) => {
    setLines(lines => [...lines, text]);
    setText("");
  };


  return (
    <div className="App">
      <div className="App-header">
      </div>
      
      <div>
         <Link to = "/Friend-List" >
         <button>
           Go FriendList
         </button>
      </Link>
      </div>
     
      <div className="App-chatroom">
        <div className="App-chatroom-text">
          
        </div>
        <div className="App-chatroom-text">
        </div>
        {
          lines.map((value, index) => {
            return <div key={index} className="App-chatroom-text">
                {value}
              </div>
          })
        }
      </div>
      <div className="App-textbox">
        <input type="text" className="App-textbox-input" onChange={onChangeHandler} value={text}/>
        <div className="App-textbox-send" onClick={onSendHandler}>Send!</div>
      </div>
    </div>
  );
}

export default App;
