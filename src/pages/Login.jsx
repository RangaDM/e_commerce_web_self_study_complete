import { useState } from "react";
import userRegister from "../Utils/Auth/register";
import userLogin from "../Utils/Auth/login";
import logOut from "../Utils/Auth/logOut";

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
              className=" cursor-pointer font-bold"
              onClick={() => setSelect("register")}
            >
              Sing Up
            </span>
          </p>
        ) : select === "register" ? (
          <p>
            Already have an account?{" "}
            <span
              className=" cursor-pointer font-bold"
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
  const loginHandler = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;

    userLogin(email, password);
  };
  return (
    <div>
      Login
      <br />
      <br />
      <div>
        <form onSubmit={loginHandler}>
        <input type="text" name="email" placeholder="Your email" />
        <input type="password" name="password" placeholder="Your password" />
        <br />
        <button type="submit">Login</button>
        </form>
      </div>
      <br />
      <div>
        <button
          onClick={logOut}
        >
          log out
        </button>
      </div>
    </div>
  );
};

const RegisterComponent = () => {
  const registerHandler = (e) => {
    e.preventDefault();
    const name = `${e.target[0].value} ${e.target[1].value}`;
    const mobile = e.target[2].value;
    const email = e.target[3].value;
    const address = e.target[4].value;
    const password = e.target[5].value;
    const cPassword = e.target[6].value;
    const profileImage = e.target[7].value;

    console.log({
      name,
      mobile,
      email,
      address,
      password,
      cPassword,
      profileImage,
    });
    // console.log(e.target);

    if (password === cPassword) {
      userRegister(email, password, name, address, mobile, profileImage);
    }
  };
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
        <input type="text" placeholder="Your address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <input type="text" placeholder="Your profile image" />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
