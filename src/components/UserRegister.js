import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserRegister = ({setData}) => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });

  const location = useLocation();
  const navigate = useNavigate();
 
  const redirect = location?.state?.path || '/login';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
}

  const handleSubmit = (e) => {
    e.preventDefault();
      setData([userInput]);
    alert("Register Successfully!!");
    setUserInput({
      username: "",
      email: "",
      phone: "",
      password: "" 
    })
    navigate(redirect, { replace: true });
  }

  return (
    <div className="formContainer">
      <div className="userForm">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label>Username</label>
            <input type="text" name="username" className="inputField" placeholder="Enter the Username" value={userInput.username} onChange={handleChange} required/>
          </div>
          <div className="inputContainer">
            <label>Email</label>
            <input type="email" name="email" className="inputField" placeholder="Enter the Email"  value={userInput.email} onChange={handleChange} required/>
          </div>
          <div className="inputContainer">
            <label>Phone</label>
            <input type="number" name="phone"  className="inputField" placeholder="Enter the Phone Number"  value={userInput.phone} onChange={handleChange} required/>
          </div>
          <div className="inputContainer">
            <label>Password</label>
            <input type="password" name="password" className="inputField" placeholder="Enter the Password" value={userInput.password} onChange={handleChange} required/>
          </div>
          <div className="btnConatiner">
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default UserRegister;