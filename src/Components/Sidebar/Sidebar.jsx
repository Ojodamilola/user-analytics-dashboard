
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  BoxArrowInRight,
  BoxArrowRight,
  
  FilePerson,
  HouseDoor,
  People,
  Person,
} from "react-bootstrap-icons";
const Sidebar = () => {
  const { logout, currentUser } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try {
      console.log("Logging out...");
      await logout();
      console.log("Logout successful");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      
    }
  };
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
            <Link to="/profile">
              <span className="navLink">
                <span className="navIcon">
                  <FilePerson />
                </span>
                <span className="navLinkText">Profile</span>
              </span>
            </Link>
          </li>

          <li>
            {currentUser ? (
              <Link onClick={handleLogout}>
                <span className="navLink">
                  <span className="navIcon">
                    <BoxArrowRight />
                  </span>
                  <span className="navLinkText">Logout</span>
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <span className="navLink">
                  <span className="navIcon">
                    <BoxArrowInRight />
                  </span>
                  <span className="navLinkText">Login</span>
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
