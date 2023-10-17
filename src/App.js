import { React, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserRegister from "./components/UserRegister"
import UserLogin from './components/UserLogin';

const App = () => {
  const [userInfo, setUserInfo] = useState([]);
  // console.log(userInfo);
  return (
    <div>
      <Routes>
        <Route path='/' element={<UserRegister setUserInfo={setUserInfo} />} />
        <Route path='/login' element={<UserLogin userInfo={userInfo} />} />
      </Routes>

    </div>
  )
}

export default App