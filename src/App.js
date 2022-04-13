import './assets/styles/App.css'
import './assets/styles/styles.css';
import './assets/styles/Employee.css';

import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import Employee from './components/Employees/Employee';
import Benefit from './components/Benefits/Benefit'
import React from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Register" element={<RegisterForm/>}/>
        <Route path="/employee" element={<Employee/>} />
        <Route path="/benefit" element={<Benefit/>} />
        
      </Routes>
    </div>
  );
}

export default App;