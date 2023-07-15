import React from "react";
const Count = ({ value, text }) => {
  console.log("Text from - ", text);
  return <div>{value}</div>;
};
export default React.memo(Count);
