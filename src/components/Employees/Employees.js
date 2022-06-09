import { employ_data } from "./data";

import { Employee } from "./";
import { EmployeesWrapper } from "./Employees.styled";

function Employees() {
  return (
    <>
      <EmployeesWrapper>
        {employ_data.map((item) => {
          return <Employee key={item.id} item={item} />;
        })}
      </EmployeesWrapper>
    </>
  );
}

export default Employees;
