import React from "react";
import { useState } from "react";

const Login = () => {
  const [select, setSelect] = useState("login");
  return (
    <div>
      {select === "login" ? (
        <LoginComponent />
      ) : select === "register" ? (
        <RegisterComponent />
      ) : null}

      <div className=" mt-7">
        {select === "login" ? (
          <p>
            Dont have an account?{" "}
            <span
              className=" cursor-pointer"
              onClick={() => setSelect("register")}
            >
              Sing Up
            </span>
          </p>
        ) : select === "register" ? (
          <p>
            Already have an account?{" "}
            <span
              className=" cursor-pointer"
              onClick={() => {
                setSelect("login");
              }}
            >
              Sing In
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Login;

const LoginComponent = () => {
  return <div>Login</div>;
};

const RegisterComponent = () => {
  const registerHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  }
  return (
  <div>
    <h1>Register</h1>
    <form onSubmit={registerHandler}>
    <div>
      <input type="text" placeholder="Your first name" />
      <input type="text" placeholder="Your Last name" />
    </div>
      <input type="text" placeholder="Your mobile" />
      <input type="text" placeholder="Your email" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm password" />
      <button type="submit">Register</button>
      </form>
    </div>);
};
