import React,{useState} from "react";

const Counter = () => {
  const [increment, changeIncrement] = useState(0);

  setTimeout(() => changeIncrement(increment + 1), 1000);

  return <h2>You have used {increment} seconds on this website</h2>;
};

export default Counter;
