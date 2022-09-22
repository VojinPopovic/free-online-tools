import NavDesktop from "../nav/NavDesktop";
import { NavStyle } from "../styles/Nav.style";
import NavMobile from "../nav/NavMobile";
import { useState, useEffect } from "react";

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1000;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.removeEventListener("resize", handleResizeWindow);
    window.addEventListener("resize", handleResizeWindow);
  }, [width]);
  function renderNav() {
    if (width > breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  return <NavStyle>{renderNav() ? <NavDesktop /> : <NavMobile width={width} />}</NavStyle>;
}

export default Nav;
