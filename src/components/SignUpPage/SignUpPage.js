import React,{useState,useRef,useEffect} from 'react';
import './SignUpPage.css';
import brnLogo from '../images/brnLogo.png';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import states from './states';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  let nameRef=useRef();
  let genderRef=useRef();
  let maritalStatusRef=useRef();
  let profilePicRef=useRef();
  let mobileNoRef=useRef();
  let cityRef=useRef();
  let emailRef=useRef();
  let passwordRef=useRef();
  let retypePasswordRef=useRef();
  let stateRef=useRef();
  let navigate=useNavigate();
  let [image,setImage]=useState(null);

  let onImageChange=()=>{
    if(profilePicRef.current.files && profilePicRef.current.files[0]){
      setImage(URL.createObjectURL(profilePicRef.current.files[0])); }
  }
  let createUser=()=>{
    let fd=new FormData();
    fd.append("name",nameRef.current.value);
    fd.append("gender",genderRef.current.value);
    fd.append("maritalStatus",maritalStatusRef.current.value);
    fd.append("profilePic",profilePicRef.current.files[0]);
    fd.append("mobileNo",mobileNoRef.current.value);
    fd.append("city",cityRef.current.value);
    fd.append("email",emailRef.current.value);
    fd.append("state",stateRef.current.value);
    fd.append("password",passwordRef.current.value);
    fd.append("retypePassword",retypePasswordRef.current.value);
    let url='http://localhost:4321/signUp';
   axios.post(url,fd).then((response)=>{
      console.log(response.data);
    }).catch((e)=>{
      console.log(e);
      console.log(e.message);
    })
  }
  return (
    <div className='container'>
      <div>
      <img src={brnLogo} alt="logo" className='logo'/>
      </div>
      <div className="form-container"> 
      <Form id="form">
      <div className="form-heading">Sign Up</div>
      <Form.Text style={{position:'relative',top:'2vh'}}>
        Enter your name as per educational certificates
      </Form.Text>
      <Form.Group className=" form-label mb-3">
        <Form.Control className="my-3"  ref={nameRef}type="text" placeholder="Name as per certificate" />
        <Form.Select className="my-3" ref={genderRef}>
          <option disabled>Gender</option>
          <option >MALE</option>
          <option >FEMALE</option>
          </Form.Select>
          <Form.Select className="my-3" ref={maritalStatusRef}>
          <option disabled>Marital Status</option>
          <option >SINGLE</option>
          <option >MARRIED</option>
          </Form.Select>
          <div>
          <Card style={{ width: '12vw',height:'23vh'}}>
            <Card.Img variant="top" src={image} id='user-image'/>
            </Card>
          </div>
        <Form.Control className="my-3"  ref={profilePicRef} type="file" onChange={()=>{onImageChange()}}placeholder="select image" />
        <Form.Control className="my-3"  ref={mobileNoRef}type="text" placeholder="Mobile No" />
        <Form.Control className="my-3"  ref={cityRef}type="text" placeholder="City/Town" />
        <Form.Select className="my-3" ref={stateRef} >
        <option value=''>State</option>
            {states.map((state)=>{
            return(
               <option >{state}</option>
            )
            })}
          </Form.Select>
        <Form.Control className="my-3"  ref={emailRef}type="email" placeholder="Email" />
        <Form.Control className="my-3"  ref={passwordRef}type="password" placeholder="Password" />
        <Form.Control className="my-3"  ref={retypePasswordRef}type="password" placeholder="reType-Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" style={{textAlign:'left'}} />
      </Form.Group>
      <div style={{display:'flex'}}>
      <Button variant="primary" type="button" onClick={()=>{createUser()}} >
        Sign Up
      </Button>
      </div>
      <Form.Text className="text-muted" style={{display:'flex'}}>or
        </Form.Text>
        <div style={{display:'flex'}}>
      <Button variant="primary" type="button" onClick={()=>{navigate("/")}}>
        Login
      </Button>
      </div>
       </Form>
      </div>
    </div>
  )
}

export default SignUpPage
