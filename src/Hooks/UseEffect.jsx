import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState({});

  async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const output = await response.json();
    setData(output);
  }

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
};

export default UseEffect;
