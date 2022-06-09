import { MenuLinkWrapper } from "./MenuLink.style";

function MenuLink({ children, to, isActive }) {
  return (
    <>
      <MenuLinkWrapper isActive={isActive}>
        <a href={to}>{children}</a>
      </MenuLinkWrapper>
    </>
  );
}

export default MenuLink;
