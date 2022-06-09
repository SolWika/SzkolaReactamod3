import { NavWrapper } from "./Menu.style";

function Menu({ children }) {
  return (
    <>
      <NavWrapper>
        <ul>{children}</ul>
      </NavWrapper>
    </>
  );
}

export default Menu;
