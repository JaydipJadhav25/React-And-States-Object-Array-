import React, { useState } from 'react'

function ObjectAndState() {
  const [count, setCount] = useState(0); // tthis is immutable
     const[list , setList] = useState({
    red : 0 ,
    green : 0,
    yellow : 0
  });

  console.log("list updatedd : " , list)

  function updateObject(){

    // list.red +=1;
    // console.log("update data : ", list)
    // setList(list); //no re-render state because obje hold refrences not a actual values

   //use spraed opreator

  // console.log("data comming : " , e.target.value); //because this is not inpput tag so we dont have support of  values


  }
  return (
  <>
  <h2>object with states</h2>

       <p >red : {list.red}</p>
       <button
        onClick={()=>{
          setList(prev =>{
            return {...prev , red : list.red+1}
          })
        }}
       style={{backgroundColor : "red" , color : "black"}}>add red</button>
       
       <p >green : {list.green}</p>
       <button 
        onClick={()=>{
          setList(prev =>{
            return {...prev , green : list.green+1}
          })
        }}
       style={{backgroundColor : "green" ,  color : "black"}}>add green</button>
       
       <p > yellow : {list.yellow}</p>
       <button 
         onClick={()=>{
          setList(prev =>{
            return {...prev , yellow : list.yellow+1}
          })
        }}
       style={{backgroundColor : "yellow" , color : "black"}}>add yellow</button>

  </>
  )
}

export default ObjectAndState