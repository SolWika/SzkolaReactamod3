import { Header, Main } from "./";

function Card({ icon, title, intro, content }) {
  const styled = {
    display: "flex",
    flexDirection: "column",
    margin: "10px auto",
    width: 350,
  };
  return (
    <>
      <div style={styled}>
        <Header icon={icon} title={title} bgColorCircle="alizarin" />
        <Main intro={intro} content={content} bgColorCircle="white" />
      </div>
    </>
  );
}

export default Card;
