import React,{useState,useRef} from 'react';
import './SignUpPage.css';
import brnLogo from '../images/brnLogo.png';
//import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  
  let nameRef=useRef();
  let genderRef=useRef();
  let maritalStatusRef=useRef();
  let profilePicRef=useRef();
  let mobileNoRef=useRef();
  let cityRef=useRef();
  let stateRef=useRef();
  let emailRef=useRef();
  let passwordRef=useRef();
  let retypePasswordRef=useRef();
  let navigate=useNavigate();
  let [image,setImage]=useState(null);

  let onImageChange=()=>{
    if(profilePicRef.current.files && profilePicRef.current.files[0]){
      setImage(URL.createObjectURL(profilePicRef.current.files[0])); }
  }
  /*let createUser=()=>{
    let fd=new FormData();
    fd.append()
    let url='http://localhost:4321/signUp';
    axios.get(url).then((response)=>{
      console.log(response);
        res.json(response.data);
    }).catch((e)=>{
      res.json({error:e})
    })
  }*/
  return (
    <div className='container'>
      <div>
      <img src={brnLogo} alt="logo" className='logo'/>
      </div>
      <div className="form-container"> 
      <Form style={{padding:'2vh 3vw 2vh 3vw',backgroundColor:'#eceef1',margin:'0',borderRadius:'2%'}}>
      <div className="form-heading">Sign Up</div>
      <Form.Text style={{position:'relative',top:'2vh'}}>
        Enter your name as per educational certificates
      </Form.Text>
      <Form.Group className=" form-label mb-3">
        <Form.Control className="my-3"  ref={nameRef}type="text" placeholder="Name as per certificate" />
        <Form.Select className="my-3" ref={genderRef}>
          <option >Gender</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          </Form.Select>
          <Form.Select className="my-3" ref={maritalStatusRef}>
          <option>Marital Status</option>
          <option >Single</option>
          <option >Married</option>
          </Form.Select>
          <div>
          <Card style={{ width: '12vw',height:'23vh'}}>
            <Card.Img variant="top" src={image} id='user-image'/>
            </Card>
          </div>
        <Form.Control className="my-3"  ref={profilePicRef} type="file" onChange={()=>{onImageChange()}}placeholder="select image" />
        <Form.Control className="my-3"  ref={mobileNoRef}type="text" placeholder="Mobile No" />
        <Form.Control className="my-3"  ref={cityRef}type="text" placeholder="City/Town" />
        <Form.Control className="my-3"  ref={stateRef}type="text" placeholder="State" />
        <Form.Control className="my-3"  ref={emailRef}type="email" placeholder="Email" />
        <Form.Control className="my-3"  ref={passwordRef}type="password" placeholder="Password" />
        <Form.Control className="my-3"  ref={retypePasswordRef}type="password" placeholder="reType-Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" style={{textAlign:'left'}} />
      </Form.Group>
      <div style={{display:'flex'}}>
      <Button variant="primary" type="button" onClick={()=>{}} >
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
