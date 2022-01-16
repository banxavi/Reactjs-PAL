import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [posts, setPosts] = useState([]);

  const axiosPost = async () => {
    axios
      .get("http://127.0.0.1:5000/emp")
      .then((res) => {
        const account = res.data;
        setPosts(account);
      })
      .catch((error) => console.log(error));
  };
  console.log(posts);
  useEffect(() => {
    axiosPost();
  }, []);

  const data_test = {
    address: "Newyork, USA",
    email: email,
    name: "nhatban",
    password: password,
    phone: "1234567890",
  };

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault();

    let emailValue = email;
    let passwordValue = password;
    let repasswordValue = repassword;
    let exists = false;

    for (var i = 0; i < posts.length; i++) {
      if (emailValue === posts[i].email) {
        exists = true;
        console.log(emailValue);
        break;
      }
    }
    if (exists === true) {
      setMessage("*Email is exists");
    } else if (passwordValue !== repasswordValue) {
      setStatus(false);
      setMessage("Repassword is not match");
    } else {
      axios
        .post("http://127.0.0.1:5000/add", data_test)
        .then(function (respone) {
          console.log(respone);
        })
        .catch((error) => console.log(error));
      setStatus(true);
      setMessage("Register Successful");
      navigate("/");
    }
  };
  return (
    <div className="login-form">
      <div className="title">REGISTER</div>
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

          <label htmlFor="password">
            Re-Password
            <br />
          </label>
          <input
            required="required"
            type="password"
            value={repassword}
            onChange={(text) => setRePassword(text.target.value)}
          />
        </div>

        <div className="button-container">
          <button className="button">Sign Up</button>
        </div>
        <div>
          <a className="a" href="/">
            Back Login
          </a>
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

export default RegisterForm;
