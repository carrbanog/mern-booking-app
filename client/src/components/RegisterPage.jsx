import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form action="" className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="loginButton">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link className="underline text-black ml-0.5" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
