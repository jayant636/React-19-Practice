import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0); // Causes the re-render + in the next render you will get the updated value
  let normalCount = 0; // Normal value will be updated once only
  const refCount = useRef(0); // Doesn't causes the re-render + persist/save the current value + In the same render you will get updated value

  function dataHandler() {
    setCount(count + 1);
    normalCount++;
    refCount.current = refCount.current + 1;

    console.log(count);
    console.log(normalCount);
    console.log(refCount.current);
  }

  return (
    <>
      <div>
        <button onClick={dataHandler}>Click Me {count}</button>
        <p>{count}</p>
        <p>{normalCount}</p>
        <p>{refCount.current}</p>
      </div>
    </>
  );
};

export default UseRef;
