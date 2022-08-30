import { Link } from "react-router-dom";
import { NavStyle, LogoDivStyle, UnorderedList } from "../styles/Nav.style";

function Nav() {
  return (
    <NavStyle>
      <LogoDivStyle>
        <div>LOGO</div>
      </LogoDivStyle>
      <UnorderedList>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </UnorderedList>
    </NavStyle>
  );
}

export default Nav;
