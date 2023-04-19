import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({ onSearch }) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
     <nav>
        <Link to="/about">
           <button>About</button>
        </Link>
        <Link to="/home">
           <button>Home</button>
        </Link>
        {isHome && (
          <SearchBar onSearch={onSearch} />
        )}
     </nav>
  );
};

export default Nav;