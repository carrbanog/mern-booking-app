import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("/register", {
  //       name,
  //       email,
  //       password,
  //     });
  //     alert("Registeration successful. Now you can log in");
  //   } catch (error) {
  //     alert("Registeration failed. Please try again later");
  //   }
  // };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log(response);
      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error);
        alert(error.response.data.message);
      } else {
        console.log(error)
        alert("서버 오류 발생. 다시 시도해 주세요.");
      }
    }
  };

  // const registerUser = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const response = await axios.post("/register", {
  //       name,
  //       email,
  //       password
  //     })
  //     alert(response.data.message);
  //   } catch(error){
  //     if(error.response && error.response.data){
  //       console.log(error);
  //       alert(error.response.data.message);
  //     }
  //   }
  // }

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
