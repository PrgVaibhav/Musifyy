import { HiHome } from 'react-icons/hi';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { ImDownload } from 'react-icons/im';
import { MdPlaylistAdd } from 'react-icons/md';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';

export default function SidebarItems(props) {
  let iconStyle = {
    fontSize: '2.2rem',
    verticalAlign: 'middle',
    background: '#333',
    borderRadius: '15px',
    padding: '.5rem',
  };
  return (
    <div className="sidebar-section">
      <ul>
        <span className="list-name">{props.listName}</span>
        <li className="sidebar-lists">
          <HiHome style={iconStyle} />
          <span className="sidebar-item">{props.firstName}</span>
        </li>
        <li className="sidebar-lists">
          <MdOutlineDoubleArrow style={iconStyle} />
          <span className="sidebar-item">{props.secondName}</span>
        </li>
        <li className="sidebar-lists">
          <ImDownload style={iconStyle} />
          <span className="sidebar-item">{props.thirdName}</span>
        </li>
        <li className="sidebar-lists">
          <MdPlaylistAdd style={iconStyle} />
          <span className="sidebar-item">{props.fourthName}</span>
        </li>
        {props.fifthName && (
          <li className="sidebar-lists">
            <BsFillBookmarkPlusFill style={iconStyle} />
            <span className="sidebar-item">{props.fifthName}</span>
          </li>
        )}
      </ul>
    </div>
  );
}
