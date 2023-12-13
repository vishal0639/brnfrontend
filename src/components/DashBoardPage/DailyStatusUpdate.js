import React,{useEffect,useState} from "react";
import {Container,Badge,Col,Row,Form,Button} from 'react-bootstrap';
import {dsaFormArray} from '../constants';
import TopNavigation from "./TopNavigation/TopNavigation";

/*style={{backgroundColor:'green'}}*/
const DailyStatusUpdate = () => {

  let [formData,setFormData]=useState({});
  const placeholderText='Write activities worked between';
  useEffect(()=>{
    console.log('hi')},[]);

  const handleChange=(e,session,fieldName)=>{
   setFormData({...formData,[`${session} ${fieldName}`]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('handleSubmit');
    console.log(formData)

  }  
  return (
    <div>
      <TopNavigation/>
      <Container style={{marginRight:'15.5%',marginTop:'-2%'}}>
        <Col className='text-start pl-0'>
        <span className="fs-3 p-0">Daily Status Update</span>
        <span className="mx-2">Write your Today's Status update</span>
        </Col>
      </Container> 
      <Badge bg="secondary" className='badge-style'><h6 className="badge-text-style">Home
      <small className='mx-3'>&gt;</small> Daily Status Update <small className='mx-2'>&gt;</small> </h6></Badge>
      <Form className='mx-4 my-3' id='dsa-form' onSubmit={handleSubmit}>
      <div><h1 id='dsaForm-heading'>Today's Activity Details</h1></div>
      <hr className='w-100'></hr>
      <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
        {dsaFormArray.map((item, index) => {
          const [session,fieldName]=item
           return (
            <Row className='my-4 mx-2' key={index}>
              <Form.Label id='dsa-form-label' column xs={12} md={3} >{`${session} ${fieldName}`}</Form.Label>
              <Col xs={4} md={8}>
                <Form.Control type='text' className='mx-3 pr-0' placeholder={`${placeholderText} ${fieldName}`}
                  onChange={(e) => handleChange(e,session,fieldName)} minLength={10} maxLength={100} required/>
              </Col>
            </Row>);})}
      </Form.Group>
      <hr></hr>
      <Form.Group className='d-flex justify-content-center'>
       <Button variant="success" type='submit'>Update Today's Status</Button>
        </Form.Group>
    </Form>
    </div>
  );
}

export default DailyStatusUpdate;
