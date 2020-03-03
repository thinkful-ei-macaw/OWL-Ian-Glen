import React from 'react';
import Participants from './participant';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Participants
    participants = {[{
          id: 1,
      name: 'Koren Templeton',
      avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
        },
    {
      id: 2,
      name: 'Caty Flucker',
      avatar:
        'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
    },
    {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
    }]}
      
    />
      </header>
    </div>
  );
}

export default App;
