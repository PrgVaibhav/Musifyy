export default function MostPopular() {
  const mostPopularData = [
    {
      id: '01',
      title: 'Love from the heart',
      singer: 'Tom Heart',
      tag: 'Motivation',
    },
    {
      id: '02',
      title: 'Beautiful Mindset in our life',
      singer: 'Jonathan Hope',
      tag: 'Mindfulness',
    },
    {
      id: '03',
      title: 'How to face big decisions',
      singer: 'Jonathan Hope',
      tag: 'Motivation',
    },
    {
      id: '04',
      title: 'Be a morning person',
      singer: 'Andy Wise',
      tag: 'Love',
    },
  ];
  return (
    <div className="most-popular-section">
      <p className="most-popular-header">Most Popular</p>
      {mostPopularData.map((data) => {
        return (
          <div key={data.id} className="most-popular-lists">
            <span className="item-number">{data.id}</span>
            <div className="album-description">
              <span className="title">{data.title}</span>
              <span className="singer">{data.singer}</span>
            </div>
            <div className="album-tag">
              <span>{data.tag}</span>
            </div>
            <div className="album-time">
              <span>58:32</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
