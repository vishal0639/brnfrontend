import React, {useRef,useState} from "react";
import "./LoginPage.css";
import brnLogo from "../images/brnLogo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

const LoginPage = () => {
  
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let emailRef = useRef();
  let passwordRef = useRef();
  let [showMsg,setShowMsg]=useState(false);
  let [msg,setMsg]=useState();
  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      console.error("Please enter both email and password.");
      setShowMsg(true);
      setMsg("Invalid Email or Password");
      return;
    }
    validateUser(email, password);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleLogin();
    }
  };
  let validateUser = (email, password) => {
    let fd = new FormData();
    let url = "http://localhost:4321/validateUser";
    fd.append("email", email);
    fd.append("password", password);
    if(email==='pulseadmin@gmail.com'){
      let role='admin'
      fd.append('role',role);
      console.log(email,password,role);
      console.log(fd)
    }
    axios
      .post(url, fd)
      .then((response) => {
        let { data } = response;
        if (data.isLoggedIn) {
          dispatch({ type: "login", value: data });
          navigate("/dashBoard");
        } else {
          console.log(data);
          setShowMsg(!(data.isLoggedIn));
          setMsg(data.msg);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="pulse-logo-style">
        <img src={brnLogo} alt="logo" className="logo" />
      </div>
      <div className="form-container">
        <Form className="form-basic" >
          <div className="form-heading" style={{textAlign:'center'}}>Login</div>
          <div id='alert-container' className="my-2">
          {showMsg && <Alert variant="danger" id="alert-style">
          <Button id='alert-cancel' variant="outline-danger" size="sm" onClick={() => setShowMsg(false)}>&times;</Button>
            {msg}!</Alert>}
            </div>
          <Form.Group className=" form-label mb-3">
            <Form.Control
              type="email"
              ref={emailRef}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="form-label mb-3">
            <Form.Control
              type="password"
              ref={passwordRef}
              placeholder="Password"
              onKeyPress={handleKeyPress}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check me out"
              style={{ textAlign: "left" }}
            />
          </Form.Group>
          <div style={{ display: "flex" }}>
            <Button
              variant="primary"
              type="button"
              onClick={() => handleLogin()}
            >
              login
            </Button>
          </div>
          <Form.Text className="text-muted" style={{ display: "flex" }}>
            or
          </Form.Text>
          <div style={{ display: "flex" }}>
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              sign-up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
