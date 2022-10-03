import NavItems from "./NavItems";

function NavDesktop(props) {
  return (
    <>
      <NavItems active={props.active} setActive={props.setActive}></NavItems>
    </>
  );
}

export default NavDesktop;
