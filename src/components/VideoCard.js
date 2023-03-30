import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <div className="VideoCard">
      <Link to={`http://localhost:5000/videos/${video._id}`}>
        <div className="VideoThumbnail">
          <img src={video.thumbnail} alt={video.title} />
        </div>
        <h2 className="VideoTitle">{video.title}</h2>
      </Link>
    </div>
  );
}

export default VideoCard;
