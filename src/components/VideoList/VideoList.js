import React from 'react';

import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const rederedList = videos.map((video, key) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{rederedList}</div>;
};

export default VideoList;
