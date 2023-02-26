import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
          
            <Link to="/">Home</Link>
          
            <Link to="/dashboard">Dashboard</Link>
          
          
            <Link to="/login">Login</Link>
          
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;