import React, { useState, useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const RoomCreation = () => {
  const [roomName, setRoomName] = useState('');
  const [joinUrl, setJoinUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initialize Zoom SDK once when the component mounts
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const handleCreateRoom = async () => {
    try {
      const signatureResponse = await fetch('http://localhost:5000/room/generate-signature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sdkKey: 'wegrvwA9QzCpoMNyy7rOhQ',
          apiSecret: '99zGtVuQ3GZdbOU3eBFERqbczYXQ3pz0',
          meetingNumber: 8488580748,
          role: 1,
          currentDate: new Date().toISOString().split('T')[0], // Add current date to the request
        }),
      });
  
      const { signature } = await signatureResponse.json();
      console.log(signature, "signature");
      setTimeout(() => {
        ZoomMtg.init({
          disablePreview: true,
          leaveUrl: 'http://localhost:3000',
          success: function (successResult) {
            ZoomMtg.join({
              meetingNumber: "8488580748",
              passWord: "",
              userName: "gg",
              userEmail: 'hazem.pan@gmail.com',
              sdkKey: "8OzALH5JR_v1yv5cfi3iA",
              signature: "d2VncnZ3QTlRekNwb01OeXk3ck9oUS44NDg4NTgwNzQ4LjEuaVlRTGFHamF4M3VRQWVjU2hSYUZoQnU0U3RwNjRkWXlSRlBqSmZLdHBtQT0=",
              
              success: async function (joined) {
                console.log('Meeting joined successfully:', joined);
                setJoinUrl(joined.result.join_url);
              },
              error: function (joinFail) {
                console.log('-- join fail --> ', joinFail);
                setError(joinFail.message);
              }
            });
          },
          error: function (error) {
            console.log('-- sdk init error --> ', error);
            setError(error.message);
          }
        });
      }, 2000);
  
  
    } catch (err) {
      console.error('Error creating room:', err);
      setError(err.message);
    }
  };
  
  return (
    <div>
      {error && <p>Error: {error}</p>}
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create Room</button>
      {joinUrl && (
        <div>
          <p>Join URL:</p>
          <a href={joinUrl} target="_blank" rel="noopener noreferrer">
            {joinUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default RoomCreation;
