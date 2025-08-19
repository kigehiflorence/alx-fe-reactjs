import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // ✅ using object for multiple errors

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    // explicit checks
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";  // ✅ "if (!email)"
    }
    if (!password) {
      newErrors.password = "Password is required"; // ✅ "if (!password)"
    }

    // if we have errors, set them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // ✅ "setErrors"
      return;
    }

    setErrors({}); // clear errors

    // Simulate API call
    console.log("Registering user:", { username, email, password });
    alert(`User ${username} registered successfully!`);

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded w-full"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
