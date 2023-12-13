import React,{useState} from 'react'
import TopNavigation from './DashBoardPage/TopNavigation/TopNavigation'

export const N = () => {

   let [r,setR]=useState([1,5]);

   let prev5=()=>{
    if(r>=1){
        setR(r[0]-5,r[0]-5)
    }
   }

  return (
    <div>
        <TopNavigation/>
        <div className='d-flex align-item-center justify-content-center' style={{marginTop:'20%'}}>
        <div className="d-flex">
            <button onClick={()=>{prev5()}}>previous 5</button>
            <button>previous 1</button>
            <div className='d-flex justify-content-space-between mx-4'>
            {
              Array.from({ length: r[1] - r[0] + 1 }, (_, index) => r[0] + index).map((i) => (
               <span key={i} style={{border:'1px solid black',padding:'3%',margin:'1%'}}>{i}</span>
                  ))
             }
            </div>
            <button>next 1</button>
            <button>next 5</button>
        </div>
        </div>
    </div>
  )
}
