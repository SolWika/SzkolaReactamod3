import { colors } from "../Form/Colors.styled";

function WrapperUser({ bgColorCircle, children }) {
  const styled = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: `${colors[bgColorCircle]}`,
    color: "white",
  };

  return (
    <>
      <div style={styled}>{children}</div>
    </>
  );
}

export default WrapperUser;
