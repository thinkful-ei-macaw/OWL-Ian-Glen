import React from 'react';
import List from './List';
import Stage from './Stage';
import './Styles/App.css'
import Chat from './Chat';


export default function App(props) {

  const newList = props.participants.map(list =>
    <List name={list.name} avatar={list.avatar} inSession={list.inSession} onStage={list.onStage} />
  );
  const newStage = props.participants.map(user => {
    if (user.onStage) {
      return <Stage name={user.name} avatar={user.avatar} onStage={user.onStage} />
    }
    return undefined;
  });

  const chatlog = props.chatlog.map(chat =>
    <Chat type={chat.type} message={chat.message} time={chat.time} participant={props.participants.find(user => user.id === chat.participantId)} />
  );

  return (
    <main className='App'>
      <ul className="user-list">
        {newList}
      </ul>
      <div className='stage'>{newStage}</div>
      <div>
        {chatlog}
        <textarea columns={50} rows={2} placeholder="chat"></textarea>
      </div>
    </main>
  );

}

