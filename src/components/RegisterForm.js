import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
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
    address: address,
    email: email,
    name: name,
    password: password,
    phone: phone,
    image: image,
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
          <label htmlFor="Name">
            Name
            <br />
          </label>
          <input
            required="required"
            type="text"
            value={name}
            onChange={(text) => setName(text.target.value)}
          />

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

          <label htmlFor="repassword">
            Re-Password
            <br />
          </label>
          <input
            required="required"
            type="password"
            value={repassword}
            onChange={(text) => setRePassword(text.target.value)}
          />
          <label htmlFor="address">
            Address
            <br />
          </label>
          <input
            required="required"
            type="text"
            value={address}
            onChange={(text) => setAddress(text.target.value)}
          />
          <label htmlFor="phone">
            Phone
            <br />
          </label>
          <input
            required="required"
            type="number"
            value={phone}
            onChange={(text) => setPhone(text.target.value)}
          />
          <label htmlFor="image">
            Image
            <br />
          </label>
          <input
            required="required"
            type="file"
            value={image}
            onChange={(text) => setImage(text.target.value)}
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
