import React from 'react'
import './Styles/Chat.css'

export default function Chat(props) {

  return props.type === 'message' ?

    <div className="message-entry">
      <img className="chatbar-avatar" src={props.participant.avatar} alt="user avatar" />
      <h2>{props.participant.name}</h2>
      <p>{props.time}</p>
      <p className="message">{props.message}</p>
    </div>

    : props.type === 'thumbs-up' || props.type === 'thumb-down' ?

      <div className="chat-entry">
        <h2 className="chath2">{props.participant.name}</h2>
        <p className="chatp">Gave a {props.type}</p>
      </div>

      : props.type === 'raise-hand' ?
        <div className="chat-entry">
          <h2 className="chath2">{props.participant.name}</h2>
          <p className="chatp">Raised their hand</p>
        </div>

        : props.type === 'join' ?
          <div className="chat-entry">
            <h2 className="chath2">{props.participant.name}</h2>
            <p className="chatp">Joined</p>
          </div>

          : props.type === 'leave' ?
            <div className="chat-entry">
              <h2 className="chath2">{props.participant.name}</h2>
              <p className="chatp">Left</p>
            </div>

            : props.type === 'join-stage' ?
              <div className="chat-entry">
                <h2 className="chath2">{props.participant.name}</h2>
                <p className="chatp">Joined the stage</p>
              </div>

              : <div className="chat-entry">
                <h2 className="chath2">{props.participant.name}</h2>
                <p className="chatp">Left the stage</p>
              </div>


};

