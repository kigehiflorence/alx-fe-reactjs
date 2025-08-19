import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import About from "./components/About";
import RegistrationForm from "./components/RegistrationForm";
import PostsComponent from "./components/PostsComponent";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogDetail from "./components/BlogDetail"; 
import Profile from "./pages/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      {/* Navigation */}
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/register">Register</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/posts" element={<PostsComponent />} />

        {/* Blog with dynamic routing */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/blog/:id/detail" element={<BlogDetail />} /> {/* extra detail route */}

        {/* Protected Profile Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
