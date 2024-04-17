const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: String,
  roomName: String,
  roomLink: String
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
