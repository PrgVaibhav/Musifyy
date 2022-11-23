import artist1 from '../Images/artist-1.jpg';
import artist2 from '../Images/artist-2.jpg';
import artist3 from '../Images/artist-3.jpg';
import artist4 from '../Images/artist-4.jpg';
import { GoVerified } from 'react-icons/go';

export default function TopPodcaster() {
  const topPodcasterData = [
    {
      id: 1,
      image: artist1,
      name: 'Tony Smart',
      followers: '223, 980 followers',
    },
    {
      id: 2,
      image: artist2,
      name: 'Andy Wise',
      followers: '300, 980 followers',
    },
    {
      id: 3,
      image: artist3,
      name: 'Jonathan Hope',
      followers: '500, 000 followers',
    },
    {
      id: 4,
      image: artist4,
      name: 'Tom Heart',
      followers: '400, 980 followers',
    },
  ];
  return (
    <div className="top-podcaster-section">
      <p className="top-podcaster-header">Top Podcaster</p>
      {topPodcasterData.map((data) => {
        return (
          <div key={data.id} className="artist-description">
            <div className="artist-image">
              <img src={data.image} alt="" />
            </div>
            <div className="artist-details">
              <div className="verified">
                <span className="artist-name">{data.name}</span>
                <span>
                  <GoVerified style={{ color: '#008abf', fontSize: '.8rem' }} />
                </span>
              </div>
              <span className="artist-followers">{data.followers}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
