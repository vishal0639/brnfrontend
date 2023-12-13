import React,{useCallback, useEffect, useState} from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Card} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { NavLink ,useNavigate} from "react-router-dom";
import './TopNavigation.css';

export default function TopNavigation() {
    let navigate=useNavigate();
    let dispatch=useDispatch();
    let [role,setRole]=useState();
    let [image,setImage]=useState(null);
    let [username,setUserName]=useState(null);
    const [isCardFocused, setCardFocused] = useState(false);
    let storeObj=useSelector((store)=>(store.loginReducer));
  
    const authenticateUser = useCallback(({loginDetails}=storeObj) => {
      console.log(loginDetails);
      if (loginDetails.isLoggedIn) {
        let { user: { name, profilePic } } = loginDetails;
        setUserName(name);
        setImage(profilePic);
      } else {
        navigate("/");
        console.log('Access denied');
      }
    }, [storeObj, navigate]);
    
    useEffect(() => {
      authenticateUser();
      console.log('bp');
    console.log(storeObj);
    let {loginDetails}=storeObj;
    console.log(loginDetails.role);
    setRole(loginDetails.role)
    }, [authenticateUser,storeObj]);
    
    let confirmPage=({isActive})=>{
     if(isActive){
      return{backgroundColor:'#f19114',color:'white',padding: '0 0.5vw 0 0.5vw',margin:'0'}
     }
    }
  
    let handleLogOut=()=>{
      dispatch({type:'logout',value:{isLoggedIn:false,msg:'logged out',user:{}}});
      navigate("/");
    }
    const toggleCardFocus = (boolean) => {setCardFocused(boolean) };
    
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow){
        newWindow.opener = null;
      }
    };
  
    return ( (role==='student' &&
      <div>
      <div style={{height:'10vh',marginBottom:'3vh'}} className="position-sticky top-0">
       {isCardFocused && <div className="overlay" tabIndex="0" onFocus={() => {toggleCardFocus(false)}}></div>}
       <div>
        <Navbar expand="lg" className="p-0 bg-body-tertiary fixed-top" >
          <Container className="link-container">
            <Navbar.Brand href="" disabled>
              Pulse.BRN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/home" style={obj=>confirmPage(obj)} className="link-style mx-3 my-2">Home</NavLink>
                <NavLink to="/dailyStatusUpdate" style={obj=>confirmPage(obj)}className="link-style mx-3 my-2">Daily Status Update</NavLink>
                <NavLink to="/tasks" style={obj=>confirmPage(obj)}className="link-style mx-3 my-2">Tasks</NavLink>
                <NavLink to="/messages" style={obj=>confirmPage(obj)} className="link-style mx-3 my-2">Messages</NavLink>
                <NavDropdown title="more" id="basic-nav-dropdown">
                <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                  <NavLink style={(obj)=>confirmPage(obj)}to="/createRequest"className="link-style">Create a request</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                <NavLink style={obj=>confirmPage(obj)} to="/applyLeave" className="link-style ">
                    Apply leave
                  </NavLink>
                  </NavDropdown.Item>  
                  <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                  <NavLink  onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1ox4-Pv8XGZg2UTZw7EUI0HCPzh5SzJH1ilXbaVFkmUk/edit#gid=0')} 
                  target="_blank" className='link-style'>Curriculum</NavLink>
                  </NavDropdown.Item> 
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0}}>
             <li><Card tabIndex="0" onFocus={() => {toggleCardFocus(true)}}id='card-style'>
               <div  id="card-element-style">
               {image !== null && (<Card.Img variant="top" src={`http://localhost:4321/${image}`} id="user-image" />)}
                <Card.Text id='username-style'>{username}</Card.Text></div>
             </Card></li>
             <li className="logOut-style" >
             {isCardFocused && (<div className="logout-overlay" >
            <Button variant="primary" id="logOut-style" type='button' onFocus={()=>{handleLogOut()}}>Log Out</Button></div>)}
             </li>
           </ul>
        </Navbar>  
        </div>     
      </div>
      </div>) ||
      ( (role==='admin') && 
      <div>
      <div style={{height:'10vh',marginBottom:'3vh'}} className="position-sticky top-0">
       {isCardFocused && <div className="overlay" tabIndex="0" onFocus={() => {toggleCardFocus(false)}}></div>}
       <div>
        <Navbar expand="lg" className="p-0 bg-body-tertiary fixed-top" >
          <Container className="link-container">
            <Navbar.Brand href="" disabled>
              Pulse.BRN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/DashBoard" style={obj=>confirmPage(obj)} className="link-style mx-3 my-2">DashBoard</NavLink>
                <NavDropdown title="more" id="basic-nav-dropdown">
                <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                  <NavLink style={(obj)=>confirmPage(obj)}to="/createRequest"className="link-style">Create a request</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                <NavLink style={obj=>confirmPage(obj)} to="/applyLeave" className="link-style ">
                    Apply leave
                  </NavLink>
                  </NavDropdown.Item>  
                  <NavDropdown.Item style={{padding:'0vw 1vw 0vw 1vw'}}>
                  <NavLink  onClick={() => openInNewTab('https://docs.google.com/spreadsheets/d/1ox4-Pv8XGZg2UTZw7EUI0HCPzh5SzJH1ilXbaVFkmUk/edit#gid=0')} 
                  target="_blank" className='link-style'>Curriculum</NavLink>
                  </NavDropdown.Item> 
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
           <ul style={{ listStyleType: 'none', padding: 0, margin: 0}}>
             <li><Card tabIndex="0" onFocus={() => {toggleCardFocus(true)}}id='card-style'>
               <div  id="card-element-style">
               {image !== null && (<Card.Img variant="top" src={`http://localhost:4321/${image}`} id="user-image" />)}
                <Card.Text id='username-style'>{username}</Card.Text></div>
             </Card></li>
             <li className="logOut-style" >
             {isCardFocused && (<div className="logout-overlay" >
            <Button variant="primary" id="logOut-style" type='button' onFocus={()=>{handleLogOut()}}>Log Out</Button></div>)}
             </li>
           </ul>
        </Navbar>  
        </div>     
      </div>
      </div>
      )
    );
}

