import NavItems from "./NavItems";
import { HamburgerContainer } from "./styles/Nav.style";

function NavMobile(props) {
  return (
    <>
      <NavItems width={props.width}></NavItems>
      <HamburgerContainer className="hamburger-container">
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
      </HamburgerContainer>
    </>
  );
}

export default NavMobile;
