import { BsThreeDots } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { RiShareBoxFill } from 'react-icons/ri';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">Discover</div>
      <div className="nav-icons">
        <BsThreeDots />
        <FiMonitor />
        <RiShareBoxFill />
      </div>
    </div>
  );
}
