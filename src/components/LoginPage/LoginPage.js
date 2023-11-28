import React from 'react';
import './LoginPage.css';
import brnLogo from '../images/brnLogo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  let navigate=useNavigate();
  return (
    <div className='container'>
      <div>
      <img src={brnLogo} alt="logo" className='logo'/>
      </div>
      <div className="form-container"> 
      <Form style={{padding:'2vh 3vw 2vh 3vw',backgroundColor:'#eceef1',margin:'0',borderRadius:'2%'}}>
      <div className="form-heading">Login</div>
      <Form.Group className=" form-label mb-3">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="form-label mb-3">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" style={{textAlign:'left'}} />
      </Form.Group>
      <div style={{display:'flex'}}>
      <Button variant="primary" type="button">
        login
      </Button>
      </div>
      <Form.Text className="text-muted" style={{display:'flex'}}>or
        </Form.Text>
        <div style={{display:'flex'}}>
      <Button variant="primary" type="button" onClick={()=>{navigate("/signUp")}}>
        sign-up
      </Button>
      </div>
       </Form>
      </div>
    </div>
  )
}

export default LoginPage
