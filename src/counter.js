import React,{useState,useEffect} from 'react'

function Counter() {
    
    useEffect(()=>{
        console.log("mounting...")
        return()=>{
            console.log("unmounting...")
        }
    })
  const [count,setCount]=useState(0)
  return (  
    <div>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <h1>this component {count}</h1>
    </div>
  )
}

export default Counter
