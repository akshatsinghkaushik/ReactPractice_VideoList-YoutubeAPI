import React from 'react';

import './VideoItem.scss';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <a className="header" href={`https://youtu.be/${video.id.videoId}`}>
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
