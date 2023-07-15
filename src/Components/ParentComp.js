import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";

const Parent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <>
      <Count text="Age Component" value={age} />
      <Button increment={incrementAge}>Increment Age</Button>
      <Count text="Salary Component" value={salary} />
      <Button increment={incrementSalary}>Increment Salary</Button>
    </>
  );
};
export default Parent;
