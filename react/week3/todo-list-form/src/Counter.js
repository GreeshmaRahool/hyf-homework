import { useState, useEffect } from "react";

const Counter = () => {
  const [increment, changeIncrement] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => changeIncrement(increment + 1), 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return <h2>You have used {increment} seconds on this website</h2>;
};

export default Counter;
