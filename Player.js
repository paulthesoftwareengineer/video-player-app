import React from 'react';
import ReactPlayer from 'react-player';

const Player = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.pexels.com/video/video-of-race-car-passing-by-857183/"  // Replace with your video URL
        controls
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default Player;
