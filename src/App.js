import './App.css';
import './styles.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';
import Benefit from './components/Benefits/Benefit'
import React from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Employee" element={<Employee/>} />
        <Route path="/Products" element={<Benefit/>} />

      </Routes>
    </div>
  );
}

export default App;