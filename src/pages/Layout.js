import { Outlet, Link } from "react-router-dom";
import './Layout.css'

// Navbar layout

const Layout = () => {
  return (
    <>
      <nav>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
            <li className="right">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;