function WrapperMenu({ children }) {
  const styled = {
    display: "flex",
    margin: "0 auto",
    maxWidth: 800,
  };
  return (
    <>
      <div style={styled}>{children}</div>
    </>
  );
}

export default WrapperMenu;
