import styled from "styled-components";

export const MenuLinkWrapper = styled.li`
  display: inline-block;
  width: 100%;
  background-color: ${(props) => (props.isActive ? "#e74c3c66" : "beige")};
  border: 1px solid #232323;
  text-decoration: none;
  transition: 0.2s ease-out;

  a {
    display: inline-block;
    padding: 10px 20px;
    width: 100%;
    color: #000;
    text-decoration: none;
  }

  &:hover {
    background-color: bisque;
  }
`;
