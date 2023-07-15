import React from "react";
const Button = ({ increment, children }) => {
  console.log("Button from - ", children);
  return <button onClick={increment}>{children}</button>;
};
export default React.memo(Button);
