import { useState } from "react";

import {
  DataWrapper,
  PrimaryDataWrapper,
  PrimaryData,
  SecondaryData,
  Info,
} from "./Employee.styled";

function Employee({ item }) {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((e) => !e);
  };
  return (
    <>
      <DataWrapper>
        <PrimaryDataWrapper>
          <PrimaryData onClick={toggleVisible}>
            <h2>{item.name}</h2>
            <h2>{item.surname}</h2>
          </PrimaryData>
        </PrimaryDataWrapper>
        <SecondaryData>
          <Info isVisible={isVisible}>Age: {item.age}</Info>
          <Info isVisible={isVisible}>Salary: {item.salary}</Info>
          <Info isVisible={isVisible}>Job: {item.job}</Info>
        </SecondaryData>
      </DataWrapper>
    </>
  );
}

export default Employee;
