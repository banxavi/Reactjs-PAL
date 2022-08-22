import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadAndDisplayImage from "../Common/UploadAndDisplayImage";
import { SERVER } from "../API/api_url";

function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [posts, setPosts] = useState([]);
  const axiosGet = async () => {
    axios
      .get(`${SERVER}/employee`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    axiosGet();
  }, []);

  const upload_image = (images) =>{
    setUploadImage(images)
  }
  const data_add = {
    address: address,
    email: email,
    name: name,
    position: 'Developer',
    password: password,
    phone: phone,
    image: uploadImage,
  };

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault();
    
    let emailValue = email;
    let passwordValue = password;
    let repasswordValue = repassword;
    // let exists = false;

    // for (var i = 0; i < posts.length; i++) {
    //   if (emailValue === posts[i].email) {
    //     exists = true;
    //     console.log(emailValue);
    //     break;
    //   }
    // }
    var exists = posts.some( post => {
      return post.email === emailValue ;
    });
    
    if (exists === true) {
      setMessage("*Email is exists");
    } else if (passwordValue !== repasswordValue) {
      setStatus(false);
      setMessage("Repassword is not match");
    } else {
      axios
        .post(`${SERVER}/add`, data_add)
        .then(function (respone) {
          console.log(respone);
          setStatus(true);
          setMessage("Register Successful");
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="login-form">
      <div className="title" styles={{color: 'darkturquoise'}}>REGISTER</div>
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
        <UploadAndDisplayImage upload_image={upload_image}/>
        </div>

        <div className="button-container">
        <button style={{color: 'darkturquoise', background: '#ffffff', border: '1px solid', fontSize: '20px', borderRadius:'10%'}}>SIGN UP</button>
        </div>
        <div>
          <a style={{paddingLeft: '45%'}} href="/">
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
