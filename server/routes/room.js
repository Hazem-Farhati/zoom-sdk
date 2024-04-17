// roomRouter.js
const express = require('express');
const crypto = require('crypto');
const ZoomMtg = require('@zoomus/websdk');
const zoomRouter = express.Router();

// Endpoint to generate Zoom meeting signature

// zoomRouter.post('/generate-token', (req, res) => {
//     try {
//       const { userId, username } = req.body;
//       if (!userId || !username) {
//         return res.status(400).json({ error: 'userId and username are required' });
//       }
  
//       const payload = {
//         userId: userId,
//         username: username,
//         // Add any additional data you need in the payload
//       };
  
//       const token = jwt.encode(payload, "7KI3egz3Rzi3nvW3T7VkA");
//       res.json({ token });
//     } catch (error) {
//       console.error('Error generating token:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
  // zoomRouter.post('/generate-signature', (req, res) => {
  //   try {
  //     const { apiKey, apiSecret, meetingNumber, role } = req.body;
  //     const timestamp = new Date().getTime() - 30000;
  //     const msg = Buffer.from(`${apiKey}${meetingNumber}${timestamp}${role}`).toString('base64');
  //     const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64');
  //     const signature = Buffer.from(`${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`).toString('base64');
  
  //     res.json({ signature });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });
  
  // zoomRouter.post('/create', async (req, res) => {
  //   try {
  //     const { roomName } = req.body;
  //     // Use Zoom API to create a meeting and get meeting details
  //     // Example: const meetingDetails = await zoomApi.createMeeting(roomName);
  //     // Then save the meeting details to the database
  //     const roomId = crypto.randomBytes(4).toString('hex');
  //     const roomLink = `https://example.com/zoom-room/${roomId}`;
  //     const newRoom = await Room.create({ roomId, roomName, roomLink });
  
  //     res.json(newRoom);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal server error' });
  //   }
  // });
module.exports = router;
