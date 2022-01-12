import './App.css';
import './styles.css';
import LoginForm from './components/LoginForm';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/Employee';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Employee" element={<Employee/>} />
      </Routes>
    </div>
  );
}


export default App;