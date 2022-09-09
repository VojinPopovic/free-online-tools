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
    if (props.width <= breakpoint) {
      ulRef.current.style.display = "none";
    }
    if (props.hamburger && props.width <= breakpoint) {
      ulRef.current.style.position = "absolute";
      ulRef.current.style.display = "block";
      ulRef.current.style.right = "0px";
      ulRef.current.style.top = "100px";
    } else if (!props.hamburger && props.width <= breakpoint) {
      ulRef.current.style.display = "none";
    } else {
      ulRef.current.style.display = "flex";
      ulRef.current.style.position = "static";
    }
  }, [props.width, props.hamburger]);
  return (
    <>
      <LogoDivStyle>
        <div>LOGO</div>
      </LogoDivStyle>
      <UnorderedList ref={ulRef} mt={props.mt}>
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
