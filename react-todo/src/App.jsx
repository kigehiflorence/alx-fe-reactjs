// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import TodoList from "./components/TodoList"; // ✅ add this import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/todos" element={<TodoList />} /> {/* ✅ add this route */}
      </Routes>
    </Router>
  );
}

export default App;
