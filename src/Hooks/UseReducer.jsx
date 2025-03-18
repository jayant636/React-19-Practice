import React, { useReducer } from "react";

const UseReducer = () => {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });

  function myReducer(prevState, action) {
    switch (action.type) {
      case "Increment":
        return {
          count: prevState.count + 1,
        };
      case "Decrement":
        return {
          count: prevState.count - 1,
        };

      default:
        break;
    }
  }

  return (
    <>
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default UseReducer;
