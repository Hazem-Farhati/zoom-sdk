const express = require('express');
const cors = require('cors');
const db_connect = require("./config/db_connect");
const jwt = require('jwt-simple');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
db_connect();

app.use(cors());

// Endpoint to fetch the SDK key
app.get('/sdk-key', (req, res) => {
  try {
    const sdkKey = '8OzALH5JR_v1yv5cfi3iA'; // Replace with your actual SDK key
    res.json({ sdkKey });
  } catch (error) {
    console.error('Error fetching SDK key:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/room/generate-signature', (req, res) => {
  try {
    const { sdkKey, apiSecret, meetingNumber, role } = req.body;
    const msg = Buffer.from(`${sdkKey}${meetingNumber}${role}`).toString('base64');
    const hash = crypto.createHmac('sha256', apiSecret).update(msg).digest('base64');
    const signature = Buffer.from(`${sdkKey}.${meetingNumber}.${role}.${hash}`).toString('base64');

    res.json({ signature });
  } catch (error) {
    console.error('Error generating signature:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
