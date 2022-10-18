import NavItems from "./NavItems";
import NavLogo from "./NavLogo";

function NavDesktop(props) {
  return (
    <>
      <NavLogo />
      <NavItems
        active={props.active}
        setActive={props.setActive}
        ulWidth="38%"
      ></NavItems>
    </>
  );
}

export default NavDesktop;
