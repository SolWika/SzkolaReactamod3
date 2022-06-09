import { colors } from "../Form/Colors.styled";

import { WrapperUser } from "./";

function Header({
  title,
  bgColor = "white",
  color = "americanRiver",
  borderSize,
  borderRadius,
  borderColor = "alizarin",
  icon,
  bgColorCircle,
}) {
  const styled = {
    display: "flex",
    flexDirection: "column",
    margin: "10px auto",
    width: 350,
    backgroundColor: `${colors[bgColor]}`,
    color: `${colors[color]}`,
    borderRadius: `${borderRadius}`,
    borderColor: `${borderColor}`,
    borderSize: `${borderSize}`,
    titleWrapper: { display: "flex", alignItems: "center" },
    title: {
      fontSize: 14,
    },
    intro: {
      textAlign: "justify",
    },
    p: {
      fontSize: 20,
    },
  };
  return (
    <>
      <header style={styled}>
        <div style={styled.titleWrapper}>
          {icon === "user" && (
            <WrapperUser bgColorCircle={bgColorCircle}>
              <p style={styled.p}>R</p>
            </WrapperUser>
          )}
          <h2 style={styled.title}>{title}</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
