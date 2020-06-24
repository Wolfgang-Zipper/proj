import React from 'react';
import state from './state.jsx';
import './App.css';
import MessageBlock from './MessageBlock/MessageBlock';


let users = state.usersData.map(user => <MessageBlock backVideo = {user.backVideo} nick = {user.nick} social = {user.social} text = {user.text} back = {user.back}/>);

function App() {
 
  return (
    <div className="App">
      <div className="plank">{users}</div>
    </div>
  );
}

export default App;
