import album1 from '../Images/album-1.avif';
import album2 from '../Images/album-2.avif';
import album3 from '../Images/album-3.avif';
import album4 from '../Images/album-4.avif';
export default function RecentlyPlayed() {
  const albumData = [
    {
      id: 1,
      albumPic: album1,
      albumTitle: 'Love Yourself',
      albumSinger: 'Tom Heart',
    },
    {
      id: 2,
      albumPic: album2,
      albumTitle: 'Beautiful Mindset ',
      albumSinger: 'Jonathan Hope',
    },
    {
      id: 3,
      albumPic: album3,
      albumTitle: 'Decisions',
      albumSinger: 'Andy Wise',
    },
    {
      id: 4,
      albumPic: album4,
      albumTitle: 'Childhood Dreams',
      albumSinger: 'Tony Smart',
    },
  ];
  return (
    <div className="recent-played-section">
      <p className="recent-header">Recently Played</p>
      <div className="recent-musics">
        {albumData.map((data) => {
          return (
            <div key={data.id} className="recent-music">
              <img src={data.albumPic} alt="" />
              <span className="song-name">{data.albumTitle}</span>
              <span className="singer-name">{data.albumSinger}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
