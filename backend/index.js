const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbUrl = 'mongodb://localhost:27017/iVideo?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error.message));

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

const statusSchema = new mongoose.Schema({
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video'
  },
  emotion: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Video = mongoose.model('Video', videoSchema);
const Status = mongoose.model('Status', statusSchema);

app.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/videos', async (req, res) => {
  try {
    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/videos/:id/statuses', async (req, res) => {
  try {
    const statuses = await Status.find({ video: req.params.id }).populate('video');
    res.json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/videos/:id/statuses', async (req, res) => {
  try {
    const status = new Status({ video: req.params.id, ...req.body });
    const savedStatus = await status.save();
    res.json(savedStatus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
