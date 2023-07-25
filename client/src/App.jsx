
//import React, { useState } from 'react'
import Index from './components/Index'
import Welcome from './components/userRegistry/Welcome/Welcome';
import Login from './components/userRegistry/Login/Login';
import Register from './components/userRegistry/Register/Register';
import Dashboard from './components/userRegistry/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {} from "antd";
import WAppFooter from './components/WAppFooter/index';
import WApp from 

function App() {

//const [currentForm, setCurrentForm] = useState('Login')

  return (
    <BrowserRouter>
    <WApp/>
      {/* <Routes>
        <Route exact path='/' element={<Welcome/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/dashboard" component={<Dashboard/>}></Route>
      </Routes> */}
    </BrowserRouter>
  
  );
}

export default App;
