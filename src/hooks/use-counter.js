import { useEffect, useState } from "react";

const useCounter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (props.forward) {
        setCounter((count) => count + 1);
      } else {
        setCounter((count) => count - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
