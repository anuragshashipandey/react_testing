import React,{useState} from 'react'
import "./Counter.css"
function Counter() {
    const[counterVal,setcounterval]=useState(0);
    const[inputval,setinputval]=useState(0);
    
    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 className={counterVal>=100?"green":(counterVal<=-100?"red":"black")}
             data-testid="counter">{counterVal}</h2>
            <button data-testid="subtract-btn" 
            onClick={()=>setcounterval(counterVal-inputval)}
            >-</button>
            <input 
                data-testid="input"     
                type="number" 
                value={inputval}
                className=""
                onChange={(e)=>setinputval(parseInt(e.target.value))}
            />
            <button 
                data-testid="add-btn" 
                onClick={()=>setcounterval(counterVal+(inputval))}>
                +</button>
            
        </div>
    )
}

export default Counter
