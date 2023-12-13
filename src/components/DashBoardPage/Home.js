import React from "react";
import {Badge,Image,Col,Row,Table,Container,Accordion,Form,Pagination} from 'react-bootstrap';
import DeveloperLogo from "../images/developerLogo.png";
import {attendanceSummary} from "../constants";
import TopNavigation from "./TopNavigation/TopNavigation";


const Home = () => {

  return ( 
   <div className="parent-container">
     <div>
     <TopNavigation className='position-sticky fixed-top'/>
       <Badge bg="secondary" className='badge-style'><h6 className="badge-text-style" >Home</h6></Badge>
       <Container className="d-flex justify-content-center my-4 mx-20">
           <div style={{ margin:'0vw 5vw 0vw 0vw'}}>
              <Image src={DeveloperLogo}  id='developer-logo'  roundedCircle/>
              <Col style={{textAlign:'center',paddingLeft:'19%'}}>
                <Row>Student</Row>
                <Row>Course:Iphone Job oriented course</Row>
                <Row>BATCH ID: 2112</Row>
                <Row>STUDENT ID: 211227</Row>
               </Col> 
           </div>
           <TableBox/>
       </Container>
       <div className="ml-3" style={{width:'97%',marginLeft:'1%'}}>
       <Accordion defaultActiveKey="0"  className='top-0 mx-1 my-4' id='accord-style'>
       <Accordion.Item  >
       <Accordion.Header>Attendance Details</Accordion.Header>
       <Accordion.Body>
          <Row className='d-flex justify-content-between'>
              <Col xs={1} md={2} className='d-flex align-items-start'>
              <Row className="ml-2">Records:</Row>
                <Form.Select aria-label="Default select example" className='mx-4 p-0 w-50 h-70'>
                  {[5,10,15,"All"].map((item,index)=><option key={index} className='pl-5'>{item}</option>)}
                </Form.Select>
              </Col>
              <Col xs={1} md={2} className='d-flex align-items-end p-0'>
              <Form.Control type="text" placeholder="My Search" className='p-0 h-70 text-center mx-4 mr-0'/>
              </Col>
           </Row>
             <LabTable/>
                
        </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       </div>
     </div>  
   </div>);

}
const LabTable=()=>{
  return(
    <div className="mt-2" style={{margin:'0 -1%'}}>
    <Table striped bordered hover className='mt-3' style={{width:'100%'}}>
    <colgroup>
       <col style={{ width: '4%' }} /> {/* Adjust the width as needed */}
       <col style={{width:'12%'}} />
       <col  style={{width:'7%'}}/>
       <col  /> {/* Give more width to Requirement column */}
       <col  /> {/* Give more width to Type column */}
       <col  /> {/* Give more width to Max file size column */}
       <col  />
       <col  style={{width:'9%'}}/>
      </colgroup>
      <thead>
         <tr>
          <th>#</th>
          <th>Date</th>
          <th>Day Type</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Time Spent</th>
          <th>Spent Summary</th>
          <th>Points Earned</th>
         </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>Just Lab</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
    <div className="d-flex flex-row align-items-center justify-content-between">
     <h6 className=" ">Showing 1 to 5 of 350 entries</h6>
     <Pagination>

    </Pagination>
    </div>
    </div>
    );
}



const TableBox=()=>{
  return(
    <Table striped bordered hover>
         <thead>
           <tr>
          <th style={{textAlign:'center'}}>Index</th>
          <th>Category</th>
          <th>Value</th>
           </tr>
         </thead>
         <tbody>
          {Object.entries(attendanceSummary).map(([category, value], index) => (
          <tr key={index}>
            <td style={{textAlign:'center'}}>{index+1}</td>
            <td>{category}</td>
            <td>{value}</td>
          </tr>))}
         </tbody>
        </Table>
  );
}


export default Home;
