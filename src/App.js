import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import React from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Mypage from './pages/Mypage';
import Writetodo from './pages/Writetodo';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mypage' element={<Mypage/>}/>
          <Route path='/write' element={<Writetodo/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
