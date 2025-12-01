import { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";

function UseState() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ButtonComponent increase={increase} />;
}

export default UseState;