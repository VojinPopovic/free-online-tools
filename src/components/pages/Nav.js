import { Link } from "react-router-dom";
import { NavStyle, LogoDivStyle, UnorderedList } from "../styles/Nav.style";
import { useState, useRef } from "react";

function Nav() {
  const [getActiveEl, setGetActiveEl] = useState("/");
  function activePage(e) {
    let activeEl = e.currentTarget;
    let list = document.querySelectorAll("li")
    list.forEach(item => item.classList.remove("active"))
    e.currentTarget.classList.add("active")
  }

  return (
    <NavStyle>
      <LogoDivStyle>
        <div>LOGO</div>
      </LogoDivStyle>
      <UnorderedList>
        <Link to="/">
          <li className="active" onClick={activePage}>Home</li>
        </Link>
        <Link to="/projects">
          <li onClick={activePage}>Projects</li>
        </Link>
        <Link to="/contact">
          <li onClick={activePage}>Contact</li>
        </Link>
      </UnorderedList>
    </NavStyle>
  );
}

export default Nav;
