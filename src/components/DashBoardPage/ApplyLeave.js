import React, { useEffect, useState} from 'react'
import { Container,Badge,Col,Row,Form,Button} from "react-bootstrap";
import { leaveObj } from '../constants';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import TopNavigation from './TopNavigation/TopNavigation';

const ApplyLeave = () => {

  useEffect(()=>{console.log('hi')},[])

  let [formData,setFormData]=useState({
    leaveType:'',startDate:null,endDate:null,description:''
  });

  let currentDate=new Date();
  
  let handleChange=(e,field)=>{ setFormData({...formData,[field]:e.target.value});}

  let [dayGap,setDayGap]=useState();
  const getDaysDifference = (start, end) => Math.abs((end?.getDate() - start?.getDate()) + 1);
  
  const handleDate = (date, field) => {
    console.log(date,field);
    setFormData((prevData) => {
      const newData = { ...prevData, [field]: date };
      if((field === 'endDate' && !prevData.startDate)){
       const newData={...prevData,startDate:date,endDate:date};
       const daysDifference = getDaysDifference(newData.startDate,newData.endDate);
        console.log(daysDifference);
        setDayGap(daysDifference);
        return {...newData};
      }else if((field === 'startDate' && (!prevData.endDate || prevData.endDate))){
        const newData={...prevData,startDate:date,endDate:date};
        const daysDifference = getDaysDifference(newData.startDate,newData.endDate);
         console.log(daysDifference);
         setDayGap(daysDifference);
         return {...newData};
       }else  if((date===null)){
        setDayGap('');
        return {...prevData};
       }
      else if ((field === 'endDate' && prevData.startDate) || (field === 'startDate' && prevData.endDate)) {
        const start = field === 'endDate' ? prevData.startDate : date;
        const end = field === 'endDate' ? date : prevData.endDate;
        const daysDifference = getDaysDifference(start, end);
        console.log(daysDifference);
        setDayGap(daysDifference);
        if (daysDifference > 3) {
          alert('Leave duration cannot be more than 3 days.Clear Both.Always Select startDate First');
          return { ...prevData, [field]: null }; 
        }
      }
  
      console.log(newData);
      return newData;
    });
  };
  let handleSubmit=(e)=>{ e.preventDefault(); console.log(formData);}
return (
<div>
  <TopNavigation/>
  <Container style={{marginRight:'15.5%',marginTop:'-2%'}}>
    <Col className='text-start pl-0'>
    <span className="fs-3 p-0">Apply for Leave</span>
    <span className="mx-2">Choose leave type,dates and describe</span>
    </Col>
  </Container> 
  <Badge bg="secondary" className='badge-style'><h6 className="badge-text-style">Home
  <small className='mx-3'>&gt;</small> Apply Leave <small className='mx-2'>&gt;</small> </h6></Badge>
  <div id='task-box' style={{ marginTop: '0.8%', marginBottom: '-3%' }}>
    <div className="w-100">
      <h1 id='task-heading'>Create a Request</h1>
    </div>
    <hr style={{ margin: '-0.6% 0 0 0' }}></hr>
    <Form onSubmit={handleSubmit}>
    <div className='w-50' style={{ margin:'-1.2% 0 0 17%', padding:'0 0 4% 0' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
        <Row className='mt-4 mx-2' style={{marginBottom:'-2%'}}>
          <Form.Label style={{ paddingLeft: '5%' }} id='dsa-form-label' column xs={12} md={3} >Leave Type</Form.Label>
          <Col xs={4} md={8}>
            <Form.Select className='mx-3 pr-0' onChange={(e) => handleChange(e, 'leaveType')} style={{ fontSize: '90%' }} 
             required value={formData.labID}><option value={``}>Select</option>
              {['Casual Leave','Sick Leave','Emergeny Leave'].map((item,index)=><option key={index}>{item}</option>)}
            </Form.Select>
            {Object.entries(leaveObj).map(([leaveType,leaveFor],index)=>{return(
              <Row key={index}><Form.Text id="passwordHelpBlock" className="mx-4" style={{fontSize:'75%'}} muted>
                <strong className='d-inline-block' style={{width:'25%'}} >{`${leaveType}`}</strong>
                <span>{":   " +leaveFor}</span>
                </Form.Text></Row>
            )})}
          </Col>
        </Row>
         <Row className='my-2 mx-2'>
          <Form.Label style={{ paddingLeft: '5%' }} id='dsa-form-label' column xs={12} md={3} >Leave Date</Form.Label>
          <Col xs={4} md={8}>
            <div className='mt-2 d-flex justify-content-between align-items-center'>
            <div style={{width:'40%',marginLeft:'3%'}}>
              <DatePicker selected={formData.startDate}  onChange={(e) => handleDate(e,'startDate')} minDate={currentDate ||formData.endDate}
              dateFormat="dd/MM/yyyy" className="mx-1 form-control" placeholderText="Starting date" required/>
              </div>
              <Button variant="secondary" disabled>Till</Button>
              <div style={{width:'40%'}}>
              <DatePicker  selected={formData.endDate} onChange={(e) => handleDate(e,'endDate')} minDate={formData.startDate ||currentDate} 
              dateFormat="dd/MM/yyyy" className="form-control" placeholderText="Ending date" required/>
              </div>
              </div> 
             <Row className="mx-2"><Form.Text style={{fontSize:'77%',width:'100%'}} muted>Number of days taken for 
              leave:{<span className={`text-${dayGap>3? 'danger' : 'info'}`}>
                {dayGap>3 ?`Can't be greater than 3 .It's ${dayGap}`:dayGap}</span>}</Form.Text></Row>
              <div className="mx-4 d-flex justify-content-between" style={{fontSize:'80%'}}>
                <span className='ml-1'>Leaves Taken :{}</span>
                <span className='mx-2'>Max.Leaves :4</span>
                <span className='mr-1' >Leaves Available:{}</span>
              </div>
           </Col>
         </Row>
         <Row className='mt-2 mb-1 mx-2'>
           <Form.Label style={{ paddingLeft: '5%' }} id='dsa-form-label' column xs={12} md={2} >Leave Description</Form.Label>
           <Col xs={4} md={8} >
             <Form.Control as='textarea' className='mx-3 pr-0' placeholder='Leave Description'
               style={{ height: '140%', fontSize: '90%' }} onChange={(e) => handleChange(e, 'description')} value={formData.description} 
                required  />
             <Row><Form.Text  className="mb-1 mx-3" style={{fontSize:'75%',margin:'0 0 1%'}} muted>Please describe the reason why
              you are asking the leave</Form.Text></Row>
           </Col>
         </Row>
       </Form.Group>
     </div>
     <div style={{margin:'4% 0 0 0'}}><hr ></hr></div>
     <Form.Group className='d-flex justify-content-end my-1' style={{ width: '40%',padding: '1% 0 1% 0' }}>
       <Button variant="success" type='submit'>Submit</Button>
     </Form.Group>
      </Form>
   </div>  
</div>
  )
}

export default ApplyLeave;