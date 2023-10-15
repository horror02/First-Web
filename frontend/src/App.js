import React from 'react';
import Login from './Login';
import Registration from './Registration';
import Forgot from './Forgot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Newpass from './Newpass';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/Registration' element={<Registration />}></Route>
      <Route path='/Forgot' element={<Forgot />}></Route>
      <Route path='/Newpass' element={<Newpass />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App