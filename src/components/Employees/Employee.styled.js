import styled from "styled-components";

export const DataWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PrimaryDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrimaryData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 300px;
  border: 2px solid black;
`;

export const SecondaryData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
  width: 300px;
  border: 2px solid black;
`;
export const Info = styled.p`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  cursor: ${(props) => (props.isVisible ? "" : "default")};
`;
