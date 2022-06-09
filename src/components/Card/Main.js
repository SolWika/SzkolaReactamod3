import { Content } from "./";

import Paella from "../../assets/Paella.jpg";

function Main({ intro, content }) {
  const styled = {
    textAlign: "justify",
    button: {
      with: 50,
      height: 50,
      backgroundColor: "red",
    },
    arrow: {
      color: "black",
    },
    img: {
      width: 350,
    },
  };

  return (
    <>
      <main style={styled}>
        <img style={styled.img} src={Paella} alt="Shrimp and Chorizo Paella" />
        <p>{intro}</p>
        <Content content={content} />
      </main>
    </>
  );
}

export default Main;
