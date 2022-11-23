import MostPopular from './MostPopular';
import Navbar from './Navbar';
import RecentlyPlayed from './RecentlyPlayed';
import TopPodcaster from './TopPodcaster';
export default function MainPage() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <section>
        <RecentlyPlayed />
      </section>
      <section className="popular-podcast">
        <MostPopular />
        <TopPodcaster />
      </section>
    </>
  );
}
