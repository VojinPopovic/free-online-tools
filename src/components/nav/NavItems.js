import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UnorderedList } from "../styles/Nav.style";

function NavItems(props) {
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

  return (
    <>
      <UnorderedList
        mt={props.mt}
        ulWidth={props.ulWidth}
        ulHeight={props.ulHeight}
        fDirection={props.fDirection}
      >
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
