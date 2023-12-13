import React ,{useState,useEffect} from 'react';
import Home from '../Home';
import { useSelector } from "react-redux";
import TopNavigation from './TopNavigation';

export const DashBoard = () => {

  let [role,setRole]=useState();
  let storeObj=useSelector((obj)=>obj.loginReducer)
  useEffect(()=>{
    console.log('bp');
    console.log(storeObj);
    let {loginDetails}=storeObj;
    console.log(loginDetails.role);
    setRole(loginDetails.role)
  },[storeObj]);


  return ( (role!=='admin') ?<Home/>      :<TopNavigation/>
  )
}
