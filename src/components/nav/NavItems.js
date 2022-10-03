import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LogoDivStyle, UnorderedList } from "../styles/Nav.style";

function NavItems(props) {
  let ulRef = useRef();

  function activePage(e) {
    props.setActive(e.currentTarget);
  }

  useEffect(() => {
    let list = document.querySelectorAll("li");
    let href = document.location.href;
    list.forEach((item) => {
      item.classList.remove("active");
      if (href.includes(item.innerText.toLowerCase())) {
        item.classList.add("active");
      } else if (item.innerText === "Home" && href.slice(-1) === "/") {
        item.classList.add("active");
      }
    });
  }, [props.active]);

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
        <div className="logo-container">
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="white" d="m23.1 16l6.3-6.3c.8-.8.8-2 0-2.8l-4.2-4.2c-.8-.8-2-.8-2.8 0L16 8.9L9.7 2.6c-.8-.8-2-.8-2.8 0L2.6 6.8c-.8.8-.8 2 0 2.8L8.9 16L2 22.9V30h7.1l6.9-6.9l6.3 6.3c.8.8 2 .8 2.8 0l4.2-4.2c.8-.8.8-2 0-2.8L23.1 16zm.7-12L28 8.2l-6.3 6.3l-4.2-4.2L23.8 4zM8.2 28H4v-4.2l6.3-6.3l4.2 4.2L8.2 28zm15.6 0L4 8.2L8.2 4l3.5 3.5l-2.1 2.1L11 11l2.1-2.1l4.2 4.2l-2.1 2.1l1.4 1.4l2.1-2.1l4.2 4.2l-1.9 2.2l1.4 1.4l2.1-2.1l3.5 3.5l-4.2 4.3z"/></svg>
        </div>
      </LogoDivStyle>
      <UnorderedList ref={ulRef} mt={props.mt}>
        <Link to="/">
          <li className="home" onClick={activePage}>
            Home
          </li>
        </Link>
        <Link to="/tools">
          <li className="tools" onClick={activePage}>
            Tools
          </li>
        </Link>
        <Link to="/contact">
          <li className="contact" onClick={activePage}>
            Contact
          </li>
        </Link>
        <Link to="/about">
          <li className="about" onClick={activePage}>
           About 
          </li>
        </Link>
      </UnorderedList>
    </>
  );
}
export default NavItems;
