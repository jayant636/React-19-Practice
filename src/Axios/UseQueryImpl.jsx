import React from "react";
import Usequery from "./Usequery";

const UseQueryImpl = () => {
  const { data } = Usequery("https://dummyjson.com/products");

  return (
    <div>
      {data?.products?.map((product) => {
        return (
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UseQueryImpl;
