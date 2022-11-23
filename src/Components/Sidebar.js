import Profile from './Profile';
import SidebarItems from './SidebarItems';
export default function Sidebar() {
  return (
    <div>
      <Profile />
      <SidebarItems listName="Home" firstName="Discover" secondName="Trending" thirdName="Streaming" fourthName="Playlist" fifthName="Bookmarks" />
      <SidebarItems listName="Category" firstName="Live Stream" secondName="Tutorial" thirdName="Competition" fourthName="Community" />
    </div>
  );
}
