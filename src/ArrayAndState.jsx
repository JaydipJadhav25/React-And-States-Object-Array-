import React, { useState } from 'react'

export default function ArrayAndState() {
    const [logs, setlogs] = useState(["no Loggs"]);

  return (
    <div>
          <h2>Array with states</h2>

          <p>Result : {logs}</p>

         
       <button
        onClick={()=>{
        //  logs.push("red")
    // console.log("logges : " , logs)
        //  setlogs(logs);

        // setlogs([...logs , " red "]);
        setlogs(prve =>{
            return [...prve , " red "]
        })
        }}
       style={{backgroundColor : "red" , color : "black"}}>add red</button>
       
     
       <button 
        onClick={()=>{
        setlogs([...logs , "  green "]);
          
        }}
       style={{backgroundColor : "green" ,  color : "black"}}>add green</button>
       
      
       <button 
         onClick={()=>{
        setlogs([...logs , " yellow "]);
         
        }}
       style={{backgroundColor : "yellow" , color : "black"}}>add yellow</button>

       <button 
         onClick={()=>{
       
            setlogs(prve =>{
                return prve.filter(x => x)
            })
         
        }}
       style={{backgroundColor : "yellow" , color : "black"}}>remove</button>
  
    </div>
  )
}
