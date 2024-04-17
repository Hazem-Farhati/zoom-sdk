import React from 'react';

const JoinRoom = ({ joinUrl }) => {
  const handleJoinRoom = () => {
    window.open(joinUrl, '_blank');
  };

  return (
    <div>
      <h2>Join Room</h2>
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default JoinRoom;
