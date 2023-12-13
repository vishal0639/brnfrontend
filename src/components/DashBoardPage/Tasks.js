import React from "react";
import { Container,Badge,Col,Row,Form,Table} from "react-bootstrap";
import TopNavigation from "./TopNavigation/TopNavigation";

const Tasks = () => {
  return (
    <div>
      <TopNavigation/>
      <Container style={{marginRight:'15.5%',marginTop:'-2%'}}>
        <Col className='text-start pl-0'>
        <span className="fs-3 p-0">Tasks</span>
        <span className="mx-2">Tasks assigned to you for completion and upload</span>
        </Col>
      </Container> 
      <Badge bg="secondary" className='badge-style'><h6 className="badge-text-style">Home
      <small className='mx-3'>&gt;</small> Tasks <small className='mx-2'>&gt;</small> </h6></Badge>
        <div id='task-box'>
          <div className="w-100 ">
          <h1 id='task-heading'>Tasks Assigned To you</h1>
          </div>
          <hr></hr>
            <Row className='d-flex justify-content-between mx-3'>
               <Col xs={1} md={2} className='d-flex align-items-start'>
               <Row className="ml-2">Records:</Row>
                 <Form.Select aria-label="Default select example" className='mx-4 p-0 w-50 h-70'>
                   {[5,10,15,"All"].map((item,index)=><option key={index} className='pl-5'>{item}</option>)}
                 </Form.Select>
               </Col>
               <Col xs={1} md={2} className='d-flex align-items-end p-0'>
               <Form.Control type="text" placeholder="My Search" className='p-0 h-70 text-center mx-4'/>
               </Col>
            </Row>
            <Table striped bordered hover className='mt-3' style={{width:'99%',margin:'0 0 0 0.5%'}}>
            <colgroup>
               <col style={{ width: '2%' }} /> {/* Adjust the width as needed */}
               <col style={{ width: '6%' }} />
               <col style={{ width: '7%' }} />
               <col style={{ width: '12%' }} /> {/* Give more width to Requirement column */}
               <col style={{ width: '15%' }} /> {/* Give more width to Type column */}
               <col style={{ width: '20%' }} /> {/* Give more width to Max file size column */}
               <col style={{ width: '5%' }} />
               <col style={{ width: '3%' }} />
               <col style={{ width: '12%' }} />
               <col style={{ width: '8%' }} />
               <col style={{ width: '6%' }} />
               <col style={{ width: '5%' }} />
               <col style={{ width: '3%' }} />
              </colgroup>
              <thead>
                 <tr>
                  <th>#</th>
                  <th>UID</th>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Requiremet</th>
                  <th>Issues</th>
                  <th>Build To Store</th>
                  <th>Deadline</th>
                  <th>Max file size</th>
                  <th>Status</th>
                  <th>Points Earned</th>
                 </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
         </div>   
    </div>
  );
};

export default Tasks;
