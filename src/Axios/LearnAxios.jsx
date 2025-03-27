import axios from "axios";
import React, { useEffect, useState } from "react";

const LearnAxios = () => {
  const [postdata, setPostData] = useState([]);

  async function fetchData() {
    const getData = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    setPostData(getData.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h4>Get Data from the Post</h4>
      {postdata.map((post) => {
        return (
          <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default LearnAxios;
