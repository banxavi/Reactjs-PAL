import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./Home"
import "./styles.css";

export default function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
  const response = await fetch(
      "http://127.0.0.1:5000/emp"
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  // User Login info
  
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = posts.find((user) => user.email === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
    <div className="formLogin">
        <div >
            <h1 className="login">LOGIN</h1>
        </div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="email">Email:<br /></label>
                <input className="inputemail" value={email} onChange={text => setEmail(text.target.value)}  type="text"  />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:<br /></label>
                <input className="inputemail" value={password} onChange={text => setPassword(text.target.value)} type="password" />
            </div>
            <button className="btnLogin" value="LOGIN" >LOGIN</button>
        </form>
    </div>
    {status === true ? (<p style={{ color: 'green' }}>{message}</p>) : (<p style={{ color: 'red' }}>{message}</p>)}
</div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
