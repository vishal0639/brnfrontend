import React, { useState } from 'react';
import { Container, Badge, Col, Row, Form, Button } from "react-bootstrap";
import { requestIDArr } from '../constants';
import TopNavigation from './TopNavigation/TopNavigation';

export const CreateReq = () => {
  const [formData, setFormData] = useState({
    requestID: '',
    labID: '',
    seatNumber: '',
    description: '',
  });
  const [spanText,setSpanText]=useState('Please describe in detail');

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let {description:d}=formData
    if(d.length<10 || d.length>50){
      console.error('description character must be between 10 and 250');
      setSpanText('description character must be between 10 and 250');
    }
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className='mb-5'>
      <TopNavigation/>
      <Container style={{ marginRight: '15.5%', marginTop: '-2%' }}>
        <Col className='text-start pl-0'>
          <span className="fs-3 p-0">Create Request</span>
          <span className="mx-2">Choose Request type and describe</span>
        </Col>
      </Container>
      <Badge bg="secondary" className='badge-style'>
        <h6 className="badge-text-style">Home
          <small className='mx-3'>&gt;</small> Create a Request<small className='mx-2'>&gt;</small>
        </h6>
      </Badge>
      <div id='task-box' style={{ marginTop: '0.8%', marginBottom: '-3%' }}>
        <div className="w-100">
          <h1 id='task-heading'>Create a Request</h1>
        </div>
        <hr style={{ margin: '-0.6% 0 0 0' }}></hr>
        <Form onSubmit={handleSubmit}>
        <div className='w-50' style={{ margin:'-1.2% 0 0 17%', padding:'0 0 4% 0' }} onSubmit={handleSubmit}>
          <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
            <Row className='my-4 mx-2'>
              <Form.Label style={{ paddingLeft: '10%' }} id='dsa-form-label' column xs={12} md={3} >Request ID</Form.Label>
              <Col xs={4} md={8}>
                <Form.Select className='mx-3 pr-0' onChange={(e) => handleChange(e, 'requestID')} 
                style={{ fontSize: '90%' }} required value={formData.requestID}>
                  <option value={``}>Select</option>
                  {requestIDArr.map((requestID, index) => <option key={index}>{requestID}</option>)}
                </Form.Select>
              </Col>
            </Row>
            <Row className='my-4 mx-2'>
              <Form.Label style={{ paddingLeft: '10%' }} id='dsa-form-label' column xs={12} md={3} >Lab ID</Form.Label>
              <Col xs={4} md={8}>
                <Form.Select className='mx-3 pr-0' onChange={(e) => handleChange(e, 'labID')} style={{ fontSize: '90%' }} required value={formData.labID}>
                  <option value={``}>Select</option>
                  <option >1</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className='my-4 mx-2'>
              <Form.Label style={{ paddingLeft: '10%' }} id='dsa-form-label' column xs={12} md={3} >Seat Number</Form.Label>
              <Col xs={4} md={8}>
                <Form.Select className='mx-3 pr-0' onChange={(e) => handleChange(e, 'seatNumber')} style={{ fontSize: '90%' }} required value={formData.seatNumber}>
                  <option value={``}>Select</option>
                  <option>1</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className='my-4 mx-2'>
              <Form.Label style={{ paddingLeft: '10%' }} id='dsa-form-label' column xs={12} md={2} >Description</Form.Label>
              <Col xs={4} md={8} >
                <Form.Control as='textarea' className='mx-3 pr-0' placeholder='Ticket Description'
                  style={{ height: '190%', fontSize: '90%' }}onChange={(e) => handleChange(e, 'description')} value={formData.description} 
                   required  />
                <Row><Form.Text id="passwordHelpBlock" className="mx-3" style={{fontSize:'75%'}} muted>{spanText}</Form.Text></Row>
              </Col>
            </Row>
          </Form.Group>
        </div>
        <hr></hr>
        <Form.Group className='d-flex justify-content-end my-1' style={{ width: '40%', padding: '1% 0 1% 0' }}>
          <Button variant="success" type='submit'>Submit</Button>
        </Form.Group>
        </Form>
      </div>
    </div>
  );
}
