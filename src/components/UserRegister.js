import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserRegister = ({ setUserInfo }) => {
  const [userInput, setuserInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userData, setUserData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const redirectPath = location?.state?.path || "/login";

  useEffect(() => {
    setUserInfo(userData);
    // console.log(userData);
  }, [userData, setUserInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(userInput);
    alert("Registered Successfully!!");
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className="userRegister">
      <div className="registerFormContainer">
        <h1>Register</h1>
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>Username</label>
            <input
              type="text"
              name="username"
              className="formInput"
              placeholder="Enter your Username"
              value={userInput.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="formInput"
              placeholder="Enter your Email"
              value={userInput.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              className="formInput"
              placeholder="Enter your Phone Number"
              value={userInput.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="formInput"
              placeholder="Enter your Password"
              value={userInput.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="registerBtnContainer">
            <button type="submit">Register Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
