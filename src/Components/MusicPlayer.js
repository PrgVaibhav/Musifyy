import { TfiControlSkipBackward, TfiControlSkipForward } from 'react-icons/tfi';
import { SlControlPause } from 'react-icons/sl';
import album4 from '../Images/album-4.avif';

export default function MusicPlayer() {
  return (
    <div className="music-player-section">
      <div className="music-player">
        <div className="song-details">
          <img src={album4} alt="" />
          <div className="song-name">
            <p>Love Yourself</p>
            <p className="singer-name">Tom Heart</p>
          </div>
        </div>
        <div className="song-controls">
          <TfiControlSkipBackward className="icon" />
          <SlControlPause className="icon" />
          <TfiControlSkipForward className="icon" />
        </div>
        <div className="song-range-duration">
          <span className="duration">18:29</span>
          <span>
            <input type="range" />
          </span>
          <span className="duration">58:32</span>
        </div>
      </div>
    </div>
  );
}
