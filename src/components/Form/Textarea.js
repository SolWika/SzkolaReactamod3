import { colors } from "./Colors.styled";

function Textarea({
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
      <textarea style={styled}></textarea>
    </>
  );
}

export default Textarea;
