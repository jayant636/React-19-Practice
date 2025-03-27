import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const LearnReactQuery = () => {
  // Features of using React Query Management -> Caching,DataFetching,UpdateDataFetching,optimizeUIUpdates,errorHanling

  // UseMutation Hook is pending for now

  // Implementing Pagination
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 5;

  async function fetchPosts() {
    const response = await axios.get(
      `https://dummyjson.com/posts?limit=${PAGE_SIZE}&skip=${
        PAGE_SIZE * (page - 1)
      }`
    );
    return response.data;
  }

  const {
    data: posts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: fetchPosts,
  });

  return (
    <div>
      <div>
        <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
        Page:{page}
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
      <div>
        {posts?.posts?.map((post) => {
          return (
            <div>
              <span>{post.id}</span>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearnReactQuery;
