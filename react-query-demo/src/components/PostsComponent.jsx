import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

// Fetch function
const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000,          // data is fresh for 5s
    cacheTime: 1000 * 60 * 5, // cache persists for 5 min
    refetchOnWindowFocus: false,
    keepPreviousData: true,   // ✅ keeps old data while fetching new data
  });

  if (isLoading) return <p className="text-blue-500">Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full max-w-lg bg-white shadow rounded p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          {isFetching ? "Refreshing..." : "Refetch"}
        </button>
      </div>

      <ul className="space-y-2 max-h-96 overflow-y-scroll">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-2 border rounded">
            <p className="font-semibold">{post.title}</p>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
