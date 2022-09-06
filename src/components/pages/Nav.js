import NavDesktop from "../NavDesktop";
import { NavStyle } from "../styles/Nav.style";
import NavMobile from "../NavMobile";
import { useState, useEffect } from "react";

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1000;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.removeEventListener("resize", handleResizeWindow);
    window.addEventListener("resize", handleResizeWindow);
    console.log(width)
  }, [width]);
  function renderNav() {
    if (width > breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  return <NavStyle>{renderNav() ? <NavDesktop /> : <NavMobile />}</NavStyle>;
}

export default Nav;
