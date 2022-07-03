import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {SERVER} from "../API/api_url"

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [posts, setPosts] = useState([]);

  const axiosLogin = async () => {
    axios.post(`${SERVER}/checklogin`, {email :email, password: password})
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => console.log(error));
  };

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault();

    axiosLogin()
    if (posts?.isUser)
   {
      setStatus(true);
      setMessage("Login successfully");
      navigate("/employee");
    }
    else{
      setStatus(false); 
      setMessage("*Login failed");
    }
  };
  return (
    <div className="login-form">
      <div className="title" style={{  color: 'darkturquoise'}}>SIGN IN</div>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label htmlFor="email">
            Email
            <br />
          </label>
          <input
            required="required" 
            type="email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />
          <label htmlFor="password">
            Password
            <br />
          </label>
          <input
            required="required" 
            type="password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
        </div>

        <div className="button-container">
          <button style={{color: 'darkturquoise', background: '#ffffff', border: '1px solid', fontSize: '20px', borderRadius:'10%'}}>LOGIN</button>
        </div>
        <div>
          <a style={{paddingLeft: '45%'}} href="/Register">Resgister</a>
        </div>
      </form>
      {status === true ? (
        <p style={{ color: "green" }}>{message}</p>
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>{message}</p>
      )}
    </div>
  );
}

export default LoginForm;
