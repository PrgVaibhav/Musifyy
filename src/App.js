import Sidebar from './Components/Sidebar';
import './App.css';
import MainPage from './Components/MainPage';
import MusicPlayer from './Components/MusicPlayer';
function App() {
  return (
    <>
      <div className="App">
        <header className="sidebar">
          <Sidebar />
        </header>
        <main className="main">
          <MainPage />
        </main>
      </div>
      <MusicPlayer />
    </>
  );
}

export default App;
