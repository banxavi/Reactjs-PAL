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

  const axiosAPI = async () => {
        try {
          const url = `https://js-post-api.herokuapp.com/api/products?
          _limit=10&_page=1`;
          const response = await axios.get(url);
            console.log(response);
            console.log(response.data)
            console.log(response.data.data)
            console.log(response.data.data[0].name)
          } catch (error) {
          console.log('Failed to fetch products: ', error);
          }  
      }


  const axiosLogin = async () => {
    axios.post(`${SERVER}/checklogin`, {email :email, password: password})
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => console.log(error));
  };
  // axiosAPI()
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
      <div className="title" style={{  color: 'darkturquoise', display:'block'}}>SIGN IN
      </div>
      <div  style={{textAlign: 'center', marginTop: '5px'}} >
      <img style={{height: '60px', width: '70px'}} src='https://cdn-icons-png.flaticon.com/512/295/295128.png'></img>
      </div>
      <form onSubmit={submitHandler}>
        <div className="input-container">
          <label htmlFor="email">
            <span style={{  fontWeight: 'bold'}}>Email</span>
            <br />
          </label>
          <input
            required="required" 
            type="email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
            style={{height: '30px'}}
          />
          <label htmlFor="password">
          <span style={{  fontWeight: 'bold'}}>Password</span>
            <br />
          </label>
          <input
            minLength={6}
            required="required" 
            type="password"
            value={password}
            onChange={(text) => setPassword(text.target.value)}
            style={{height: '30px'}}

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
