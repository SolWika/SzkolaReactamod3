import { colors } from "./Colors.styled";

function Input({
  label,
  bgColor = "alizarin",
  color = "clouds",
  borderSize,
  borderRadius,
  borderColor,
}) {
  const styled = {
    margin: 10,
    backgroundColor: `${colors[bgColor]}`,
    color: `${colors[color]}`,
    borderRadius: `${borderRadius}`,
    borderColor: `${borderColor}`,
    borderSize: `${borderSize}`,
  };
  return (
    <>
      <input style={styled} text={label}></input>
    </>
  );
}

export default Input;
