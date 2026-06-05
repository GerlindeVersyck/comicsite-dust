import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link> <Link to="/calendar">Calendar</Link>{" "}
      <Link to="/comics">Comics</Link> <Link to="/blogs">Blogs</Link>{" "}
      {!user && <Link to="/login">Login</Link>}{" "}
      {!user && <Link to="/register">Register</Link>}{" "}
      {user && <Link to="/favorites">Favorites</Link>}{" "}
      {user?.role === "admin" && <Link to="/me">Me</Link>}{" "}
      {user?.role === "admin" && <Link to="/admin/users">Users</Link>}{" "}
      {user?.role === "admin" && <Link to="/admin/config">Config</Link>}{" "}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
