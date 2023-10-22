import UserRegister from './components/UserRegister'
import './App.css'
import { useState } from 'react'
import UserLogin from './components/UserLogin';
import { Routes, Route } from 'react-router-dom';
import User from './components/User';
import UserForm from './components/UserForm';
import userContext from './utils/userContext';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <userContext.Provider value={{
         user: data
       
      }}>
        <Routes>
        <Route path='/' element={<UserRegister setData={setData}/>} />
        <Route path='/login' element={<UserLogin data={data} />} />
        <Route path='/user' element={<User data={data} />} />
        <Route path='/form' element={<UserForm/>} />
      </Routes>
      </userContext.Provider>
    </div>
  )
}

export default App