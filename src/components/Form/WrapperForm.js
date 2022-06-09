function WrapperForm({ children }) {
  const styled = {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: 500,
  };
  return (
    <>
      <div style={styled}>{children}</div>
    </>
  );
}

export default WrapperForm;
