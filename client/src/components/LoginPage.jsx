import React, { useState, useContext } from "react";
import "../index.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const {user, setUser} = useContext(UserContext);
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log(response);
      console.log(user)
      setUser(response.data.userDoc.name);
      alert(response.data.message);
      setRedirect(true);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  };
  if(redirect){
    return <Navigate to = {"/"} />
  }
  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form
          action=""
          className="max-w-md mx-auto"
          onSubmit={handleLoginSubmit}
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link className="underline text-black ml-0.5" to="/register">
              Registers now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
