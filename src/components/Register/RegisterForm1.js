import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UploadAndDisplayImage from "../Common/UploadAndDisplayImage";
import { SERVER } from "../API/api_url";

function RegisterForm1() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: '',
    email: '',
    password: '',
    repassword: '',
    address: '',
    phone: '',
    uploadImage: '',
  });

  const inputNameChange = (event) =>{
  setValue((prevState) => ({
    ...prevState, 
    name : event.target.value
  }));
}
const inputEmailChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      email : event.target.value
    }));
  }
const inputPasswordChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      password : event.target.value
    }));
  }
const inputRepasswordChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      repassword : event.target.value
    }));
  }
const inputAddressChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      address : event.target.value
    }));
  }
const inputPhoneChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      phone : event.target.value
    }));
  }
const inputUploadImageChange = (event) =>{
    setValue((prevState) => ({
      ...prevState, 
      uploadImage : event
    }));
    console.log(value);
  }

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
  const data_add = {
    address: value.address,
    email: value.email,
    name: value.name,
    position: 'Developer',
    password: value.password,
    phone: value.phone,
    image: value.uploadImage,
  };

  const submitHandler = (event) => {
    //Prevent page reload
    event.preventDefault();
    
    let emailValue = value.email;
    let passwordValue = value.password;
    let repasswordValue = value.repassword;

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
      <div style={{textAlign: 'center'}}>
        <img src="https://cdn-icons-png.flaticon.com/512/942/942748.png"></img>
      </div>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label htmlFor="Name">
            Name
            <br />
          </label>
          <input
            required="required"
            type="text"
            value={value.name}
            onChange={inputNameChange}
          />

          <label htmlFor="email">
            Email
            <br />
          </label>
          <input
            required="required"
            type="email"
            value={value.email}
            onChange={inputEmailChange}
          />
          <label htmlFor="password">
            Password
            <br />
          </label>
          <input
            required="required"
            type="password"
            value={value.password}
            onChange={inputPasswordChange}
          />

          <label htmlFor="repassword">
            Re-Password
            <br />
          </label>
          <input
            required="required"
            type="password"
            value={value.repassword}
            onChange={inputRepasswordChange}
          />
          <label htmlFor="address">
            Address
            <br />
          </label>
          <input
            required="required"
            type="text"
            value={value.address}
            onChange={inputAddressChange}
          />
          <label htmlFor="phone">
            Phone
            <br />
          </label>
          <input
            required="required"
            type="number"
            value={value.phone}
            onChange={inputPhoneChange}
          />
        <UploadAndDisplayImage upload_image={inputUploadImageChange}/>
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

export default RegisterForm1;
