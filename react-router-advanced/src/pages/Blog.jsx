import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  // pretend posts
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced React Router" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="text-blue-500">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
