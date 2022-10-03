import NavItems from "./NavItems";
import { HamburgerContainer } from "../styles/Nav.style";
import { useRef, useState } from "react";

function NavMobile(props) {
  const closeHamburgerRef = useRef();
  const showHamburgerRef = useRef();
  const [hamburger, setHamburger] = useState(false);

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

  return (
    <>
      <NavItems
        width={props.width}
        hamburger={hamburger}
        mt="50px"
        active={props.active}
        setActive={props.setActive}
      ></NavItems>
      <HamburgerContainer
        display="block"
        onClick={hamburgerDisplay}
        className="hamburger-container"
        ref={showHamburgerRef}
      >
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h22M5 16h22M5 24h22"/></svg>
      </HamburgerContainer>
      <HamburgerContainer
        ref={closeHamburgerRef}
        onClick={hamburgerClose}
        display="none"
      >
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12L5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/></svg>
      </HamburgerContainer>
    </>
  );
}

export default NavMobile;
