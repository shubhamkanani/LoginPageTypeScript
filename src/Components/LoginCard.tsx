import axios from "axios";
import React, { useEffect, useState } from "react";

interface IUserData {
  UserName: string;
  Password: string;
  id: number;
}

function LoginCard() {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setloginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
    console.log({ [event.target.name]: event.target.value });
  };
  const handelLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");

    event.preventDefault();
    const user = userData.find((data) => data.UserName === loginData.username);
    if (user) {
      if (user.Password === loginData.password) {
        console.log("login successful");
        alert("login successful");
        return true;
      }
      console.log("login failed");
      alert("login failed");
      return false;
    }
    console.log("login failed");
    alert("login failed");
    return false;
  };

  useEffect(() => {
    axios.get("/user.json").then((res) => {
      setUserData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div
      className="login-card my-20 shadow-2xl rounded-sm border"
      style={{ display: "flex", width: "75%", height: "350px" }}
    >
      <div className="login-title px-12 py-16 w-4/12">
        <div className="login-title-wrap text-left flex flex-col">
          <h3 className="mb-auto text-black text-2xl font-semibold">
            Register
          </h3>
          <a href="/" style={{ marginTop: "100px", color: "#51189A" }}>
            Become a partner.
          </a>
        </div>
      </div>
      <div
        className="login-form px-12 py-16 w-8/12"
        style={{ background: "#51189A" }}
      >
        <div className="login-form-wrap text-left">
          <h3 className="text-white text-2xl font-semibold mb-10">Sign in.</h3>
          <div className="form-group my-10">
            <label htmlFor="email" className="text-white mr-3">
              Email
            </label>
            <span style={{ borderBottom: "1px solid white" }}>
              <input
                type="text"
                name="username"
                id="email"
                className="bg-transparent text-white"
                onChange={handelChange}
                autoComplete="off"
              />
            </span>
          </div>
          <div className="form-group my-10">
            <label htmlFor="password" className="text-white mr-3">
              Password
            </label>
            <span style={{ borderBottom: "1px solid white" }}>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-transparent text-white"
                style={{
                  border: "none",
                  outline: "none",
                }}
                onChange={handelChange}
                autoComplete="off"
              />
            </span>
          </div>
          <div className="form-group flex justify-between items-center">
            <a style={{ color: "#8760B9" }}>Forgot password?</a>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              onClick={handelLogin}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
