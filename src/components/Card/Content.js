import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

function Content({ content }) {
  const styled = {
    textAlign: "justify",
    arrow: {
      color: "black",
    },
    wrapperButton: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 15,
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: "white",
      border: "none",
      cursor: "pointer",
    },
  };

  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    setIsActive((e) => !e);
  };

  if (isActive) {
    return (
      <>
        <div style={styled.wrapperButton}>
          <button style={styled.button} onClick={toggleIsActive}>
            <FontAwesomeIcon style={styled.arrow} icon={faArrowUp} />
          </button>
        </div>
        <p>{content}</p>
      </>
    );
  } else {
    return (
      <div style={styled.wrapperButton}>
        <button style={styled.button} onClick={toggleIsActive}>
          <FontAwesomeIcon style={styled.arrow} icon={faArrowDown} />
        </button>
      </div>
    );
  }
}

export default Content;
