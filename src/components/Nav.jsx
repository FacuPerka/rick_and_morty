import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
      {isHomePage && <SearchBar onSearch={onSearch} />}
    </div>
  );
};

export default Nav;
