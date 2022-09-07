import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LogoDivStyle, UnorderedList } from "./styles/Nav.style";

function NavItems(props) {
  let ulRef = useRef();

  function activePage(e) {
    let list = document.querySelectorAll("li");
    list.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  }

  useEffect(() => {
    let breakpoint = 1000;
    if (props.width < breakpoint) {
      ulRef.current.style.display = "none";
    }
  }, [props.width]);
  return (
    <>
      <LogoDivStyle>
        <div>LOGO</div>
      </LogoDivStyle>
      <UnorderedList ref={ulRef}>
        <Link to="/">
          <li className="active" onClick={activePage}>
            Home
          </li>
        </Link>
        <Link to="/projects">
          <li onClick={activePage}>Projects</li>
        </Link>
        <Link to="/contact">
          <li onClick={activePage}>Contact</li>
        </Link>
      </UnorderedList>
    </>
  );
}
export default NavItems;
