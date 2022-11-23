import { RiArrowDropDownLine } from 'react-icons/ri';
import user from '../Images/user.jpg';
export default function Profile() {
  return (
    <div className="sidebar-section">
      <div className="profile-img">
        <img src={user} alt="" />
      </div>
      <div className="profile-name">
        <span>Vaibhav</span>
      </div>
      <div className="down-arrow">
        <RiArrowDropDownLine style={{ fontSize: '1.5rem', verticalAlign: 'middle' }} />
      </div>
    </div>
  );
}
