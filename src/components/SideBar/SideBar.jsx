import logo from "../../assets/logo.png"
import './SideBar.css'; 


// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen, onClose, onLanguageChange }) => {

  const changeLanguage = (lng) => {
    onLanguageChange(lng);
    onClose();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" />
        <button className="sidebar-close" onClick={onClose}>×</button>
      </div>
      <div className="sidebar-content">
        <div className="language-switcher">
          <button className="language-button" onClick={() => changeLanguage('ar')}>AR</button>
          <button className="language-button" onClick={() => changeLanguage('en')}>EN</button>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <ul>
              <li>Home</li>
              <li>Sections</li>
              <li>Courses</li>
              <li>Overview</li>
              <li>Instructors</li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;


