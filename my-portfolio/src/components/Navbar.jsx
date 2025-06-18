import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className='navbar'
      // style={{
      //   position: "relative",
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   padding: "1rem 2rem",
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   zIndex: 100,
      //   backgroundColor: "rgba(17, 17, 17, 0.8)",
      //   backdropFilter: "blur(10px)",
      // }}
    >
      <Link
        to="/"
        style={{
          color: "#F5F2F0",
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Portfolio
      </Link>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/"
          style={{
            color: isActive("/") ? "#A79295" : "#F5F2F0",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: isActive("/about") ? "#A79295" : "#F5F2F0",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          About
        </Link>
        <Link
          to="/projects"
          style={{
            color: isActive("/projects") ? "#A79295" : "#F5F2F0",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={{
            color: isActive("/contact") ? "#A79295" : "#F5F2F0",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 