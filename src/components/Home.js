import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoGrid from './VideoGrid';
import AddVideo from "./AddVideo"

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/videos')
      .then(response => {
        console.log(response.data);
        setVideos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Home">
      <h1>Welcome to the Home page!</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}

export default Home;
