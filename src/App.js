import './assets/styles/App.css'
import './assets/styles/styles.css';
import './assets/styles/Employee.css';
import './assets/styles/index.css'

import LoginForm from './components/Login/LoginForm';

import RegisterForm from './components/Register/RegisterForm';
import { Routes, Route } from 'react-router-dom';
import Employee from './components/Employees/Employee';
import Benefit from './components/Benefits/Benefit'
import SuggestSearch from './Test/SuggestSearch';
import React from 'react';
import RegisterForm1 from './components/Register/RegisterForm1';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm1/>}/>
        <Route path="/employee" element={<Employee/>} />
        <Route path="/benefit" element={<Benefit/>} />
        <Route path='/suggestsearch' element={<SuggestSearch/>}/>

        
      </Routes>
    </div>
  );
}

export default App;