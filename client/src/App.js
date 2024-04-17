import React, { useState } from 'react';
import RoomCreation from './components/RoomCreation';
import JoinRoom from './components/JoinRoom';

const App = () => {
    return (
        <div>
            <h1>Create New Zoom Room</h1>
            <RoomCreation />
            <h1>Join Room</h1>
            <JoinRoom />
        </div>
    );
};

export default App;
