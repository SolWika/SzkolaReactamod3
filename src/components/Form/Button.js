import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { colors } from "./Colors.styled";

function Button({ label, bgColor = "alizarin", color = "clouds", icon }) {
  const styled = {
    margin: "0 auto",
    width: 100,
    backgroundColor: `${colors[bgColor]}`,
    color: `${colors[color]}`,
  };
  return (
    <>
      <button style={styled}>
        <FontAwesomeIcon icon={icon === "user" ? faUser : ""} />
        {label}
      </button>
    </>
  );
}

export default Button;
