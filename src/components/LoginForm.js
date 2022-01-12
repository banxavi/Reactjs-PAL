import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("http://127.0.0.1:5000/emp");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault();

    let emailValue = email;
    let passwordValue = password;
    for (var i = 0; i < posts.length; i++) {
      if (emailValue === "" || passwordValue === "") {
        setStatus(false);
        setMessage("*please type into mandatory fields");
      } else {
        if (
          emailValue === posts[i].email &&
          passwordValue === posts[i].password
        ) {
          setStatus(true);
          setMessage("Login successfully");
          navigate("/Employee");
        } else {
          setStatus(false);
          setMessage("*Login failed");
        }
      }
    }
  };
  return (
    <div className="login-form">
      <div className="title">SIGN IN</div>
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
          <button className="button">LOGIN</button>
        </div>
      </form>
      {status === true ? (
        <p style={{ color: "green" }}>{message}</p>
      ) : (
        <p style={{ color: "red", textAlign: "left" }}>{message}</p>
      )}
    </div>
  );
}

export default LoginForm;
