import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BoxArrowInRight,  FilePerson,  HouseDoor, People, Person, } from "react-bootstrap-icons";
const Sidebar = () => {
  return (
    <div className="sideBar">
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/">
              <span className="navLink">
                <span className="navIcon">
                  <HouseDoor />
                </span>
                <span className="navLinkText">Dashboard</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <span className="navLink">
                <span className="navIcon">
                <Person />
                </span>
                <span className="navLinkText">User</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/roles">
              <span className="navLink">
                <span className="navIcon">
                <People />
                </span>
                <span className="navLinkText">Roles</span>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/profile"><span className="navLink">
                <span className="navIcon">
                <FilePerson />
                </span>
                <span className="navLinkText">Profile</span>
              </span></Link>
          </li>
          <li>
            <Link to="/login"><span className="navLink">
                <span className="navIcon">
                <BoxArrowInRight />
                </span>
                <span className="navLinkText">Login</span>
              </span></Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
