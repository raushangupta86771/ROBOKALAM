import React from 'react';
import VideoCard from './VideoCard';

function VideoGrid({ videos }) {
  return (
    <div className="VideoGrid">
      {videos.map(video => (
        <VideoCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default VideoGrid;
