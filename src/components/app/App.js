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

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylist = this.updatePlaylist.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      searchResults: sampleResults,
      playlistName:'My Playlist :-)',
      playlistTracks: samplePlaylistTracks
    }
  }

  addTrack(selectedTrack) {
    if(this.state.playlistTracks.find(track => selectedTrack.id === track.id)) {
      return;
    } else {
      let playlist = this.state.playlistTracks;
      playlist.push(selectedTrack);
      this.setState({ playListTracks: playlist });
      // console.log(this.state.playlistTracks);
    }
  }

  removeTrack(selectedTrack) {
    const playlist = this.state.playlistTracks.filter(track => selectedTrack.id !== track.id);
    this.setState({ playlistTracks: playlist });
    // console.log(this.state.playlistTracks);
  }

  updatePlaylist(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri)
    return trackURIs
  }

  search(str) {
    console.log(str);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}
            />
            <Playlist name={this.state.playlistName}
              playlist={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylist}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
