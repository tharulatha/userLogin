import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserLogin = ({ data }) => {
  const [loginData, setloginData] = useState({
    username: "",
    password: "",
  });

  const location = useLocation();

  const navigate = useNavigate()
  const redirect = location?.state?.path || '/user'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = data.filter(
      (val) =>
        val.username === loginData.username &&
        val.password === loginData.password
    );

    if (user.length > 0) {
      alert("Login Successfully!!");
      setloginData({
        username: "",
        password: ""
      })
      navigate(redirect, {replace: true})
      
    } else {
      alert("Login Failed!!");
      setloginData({
        username: "",
        password: ""
      })
    }
  };

  return (
    <div className="formContainer">
      <div className="userForm">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter the username"
              value={loginData.username}
              onChange={handleChange}
              className="inputField"
              required
            />
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter the password"
              value={loginData.password}
              onChange={handleChange}
              className="inputField"
              required
            />
          </div>
          <div className="btnConatiner">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
