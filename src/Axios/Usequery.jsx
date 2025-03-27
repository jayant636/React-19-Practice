import axios from "axios";
import React, { useEffect, useState } from "react";

const Usequery = (url) => {
  const [data, setData] = useState(null);

  async function fetchData() {
    const response = await axios.get(url);
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
};

export default Usequery;
