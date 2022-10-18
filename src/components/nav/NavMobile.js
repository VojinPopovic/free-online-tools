import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import { HamburgerContainer, UlContainer } from "../styles/Nav.style";
import { useRef, useState, useEffect } from "react";

function NavMobile(props) {
  const closeHamburgerRef = useRef();
  const showHamburgerRef = useRef();
  const [hamburger, setHamburger] = useState(false);
  let ulRef = useRef();

  function hamburgerDisplay(e) {
    e.currentTarget.style.display = "none";
    closeHamburgerRef.current.style.display = "block";
    setHamburger(true);
  }
  function hamburgerClose(e) {
    e.currentTarget.style.display = "none";
    showHamburgerRef.current.style.display = "block";
    setHamburger(false);
  }

  useEffect(() => {
    let breakpoint = 1000;
    if (hamburger && props.width <= breakpoint) {
      ulRef.current.style.display = "flex";
      ulRef.current.style.right = "0px";
      ulRef.current.style.top = "0px";
    } else if (!hamburger && props.width <= breakpoint) {
      ulRef.current.style.display = "none";
    } else {
      ulRef.current.style.display = "flex";
    }
  }, [props.width, hamburger]);
  return (
    <>
      <NavLogo />
      <UlContainer ref={ulRef} bColor="#080808">
        <HamburgerContainer
          ref={closeHamburgerRef}
          onClick={hamburgerClose}
          display="none"
          hamPosition="absolute"
        >
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/></svg>
        </HamburgerContainer>
        <NavItems
          width={props.width}
          hamburger={hamburger}
          active={props.active}
          setActive={props.setActive}
          ulWidth="50%"
          ulHeight="40%"
          fDirection="column"
        ></NavItems>
      </UlContainer>
      <HamburgerContainer
        display="block"
        onClick={hamburgerDisplay}
        className="hamburger-container"
        ref={showHamburgerRef}
      >
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22"/></svg>
      </HamburgerContainer>
    </>
  );
}

export default NavMobile;
