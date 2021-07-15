// import logo from './logo.svg';
import './App.css';
import { SearchBar } from '../searchbar/searchbar';
import { PlayList } from '../playlist/playlist';

function App() {
  return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        {/* <!-- Add a SearchResults component -->*/}
        <PlayList />
      </div>
    </div>
  </div>
  );
}

export default App;
