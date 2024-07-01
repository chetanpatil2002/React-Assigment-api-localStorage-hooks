import React, { useState } from "react";
import { Button } from "reactstrap";

export default function IncrenentDecrement() {
  let [count, setCount] = useState(0);
  const incHandler = () => {
    setCount(count + 1);
  };

  const decHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className="flex gap justify-center  items-center mt-80 ">
      <div>
        <h1 className=" text-center fs-1">{count}</h1>
        <div className=" flex gap-3">
          <Button className=" bg-danger" onClick={incHandler}>
            Increment
          </Button>
          <Button className=" bg-warning" onClick={decHandler}>
            Decrement
          </Button>
          <Button className="bg-success" onClick={resetHandler}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
