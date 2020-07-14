import React, { Component } from 'react';

import SearchBar from '../Search/SearchBar';
import './App.scss';

import youtube from '../../apis/youtube';

import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('motivational');
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get('./search', {
      params: {
        q: term,
      },
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
