import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

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

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}          // ✅ now matches requirement
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}             // ✅ now matches requirement
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}          // ✅ now matches requirement
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />

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
