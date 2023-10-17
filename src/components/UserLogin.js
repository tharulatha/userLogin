import { React, useState } from "react";

const UserLogin = ({ userInfo }) => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
    const [loginData, setLoginData] = useState([]);
    // console.log(userInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = userInfo.filter(
      (value) =>
        value.username === userLogin.username &&
        value.password === userLogin.password
      );
    //   console.log(data);

    if (data.length > 0) {
      setLoginData(userLogin);
      alert("Login Successfully!!");
      console.log(loginData);
    } else {
        alert("Login failed!!");  
    }
  };

  return (
    <div className="userLogin">
      <div className="loginConatiner">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>Username</label>
            <input
              type="text"
              className="formInput"
              name="username"
              placeholder="Enter your username"
              onChange={handleChange}
              value={userLogin.username}
              required
            />
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input
              type="password"
              className="formInput"
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              value={userLogin.password}
              required
            />
          </div>
          <div className="loginBtnContainer">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
