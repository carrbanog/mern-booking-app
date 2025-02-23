import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4  grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form action="" className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="loginButton">Login</button>
          <div className="text-center py-2 text-gray-500">Don't have an account yet? 
            <Link className="underline text-black ml-0.5" to="/register">Registers now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
