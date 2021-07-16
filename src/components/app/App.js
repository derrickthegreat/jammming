import React from 'react';

import './App.css';

import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


const sampleResults = [
  {name: 'name1', artist: 'artist1', album: 'album1', id: 1},
  {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
  {name: 'name3', artist: 'artist3', album: 'album3', id: 3},
]

const samplePlaylistTracks = [
  {name: 'name4', artist: 'artist4', album: 'album4', id: 4},
  {name: 'name5', artist: 'artist5', album: 'album2', id: 5},
  {name: 'name6', artist: 'artist6', album: 'album3', id: 6},
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: sampleResults,
      playlistName:'Name 1',
      playlistTracks: samplePlaylistTracks
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist name={this.state.playlistName}
              playlist={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
