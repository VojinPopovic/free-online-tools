import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LogoDivStyle, UnorderedList } from "../styles/Nav.style";

function NavItems(props) {
  let ulRef = useRef();
  const [active, setActive] = useState();

  function activePage(e) {
    setActive(e.currentTarget);
  }

  useEffect(() => {
    let list = document.querySelectorAll("li");
    let href = document.location.href 
    list.forEach((item) => {
      item.classList.remove("active");
      if (href.includes(item.innerText.toLowerCase())) {
        item.classList.add("active");
      } else if (item.innerText === "Home" && href.slice(-1) === "/") {
        item.classList.add("active");
      }
    });
  }, [active]);

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
      </UnorderedList>
    </>
  );
}
export default NavItems;
