import React from 'react';

export default function participants(props) {

    return (
        <ul>
            {props.participants.map(participant => {

                let onStage = checkStage(participant.onStage);

                if (participant.inSession === true) {
                    return (
                        <li><img src={participant.avatar} alt="participant image" />
                            <h3>{participant.name}</h3>
                        </li>
                    )
                } else if (!participant.inSession) {

                    return (
                        <li>
                            <img src={participant.avatar} alt="participant image" />
                            <h3>{participant.name}</h3>
                            <p>{participant.name} left the session</p>
                        </li>
                    )
                }
            })}
        </ul>

    )

}

function checkStage(stage) {

    if (stage === true) {
        return (
            <p>On stage</p>
        );
    } else {
        return (
            <p>In session</p>
        );
    }


}