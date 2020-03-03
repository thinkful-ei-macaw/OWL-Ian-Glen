import React from 'react';
import ReactDOM from 'react-dom';
import Participants from './participant';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants
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
      
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  })