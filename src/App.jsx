import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

const Calculator = () =>{
  const [display, setDisplay] = React.useState({
    current: "0",
    total: "0" ,
    isInitial: true,
    PreOp: " "
  });

  const handleNumber = (value) => {
    // Handle number logic
    let newValue  = value ;
    if (!display.isInitial){
    newValue = display.current + value;
  }
    setDisplay({current: newValue , total: display.total,isInitial: false,PreOp: display.PreOp});

  };

  const handleOperator = (value) => {
    // Handle operator logic
    const total = doCalculation();
    setDisplay({current: total.toString() , total: total.toString() , isInitial: true , PreOp: value} )


  };
  const doCalculation = () => {
    let total = parseInt(display.total) ; 
console.log(display);
    switch(display.PreOp)
    {
      case "+":
        total+=parseInt(display.current);
        break;
      case "-":
        total-=parseInt(display.current);
        break;
      case "*":
        total*=parseInt(display.current);
          break;
      case "/":
        total/=parseInt(display.current);
          break;
       default:
           total = parseInt(display.current);
    }
return total ;
  }
  
function renderDisplay(){
  return display.current ;
}
function handleClear(){
  setDisplay({
    current: "0",
    total: "0" ,
    isInitial: true,
    PreOp: " "
  });
}


  return (
  <div className='calculator'>
    <div className='displayAnswer'>{renderDisplay()}</div>
    <CalcButton value="7" onClick={handleNumber}/>
    <CalcButton value="8" onClick={handleNumber}/>
    <CalcButton value="9" onClick={handleNumber}/>
    <CalcButton className="operator" value="/" onClick={handleOperator}/>

    <CalcButton value="4" onClick={handleNumber}/>
    <CalcButton value="5" onClick={handleNumber}/>
    <CalcButton value="6" onClick={handleNumber}/>
    <CalcButton className="operator" value="*" onClick={handleOperator}/>

    <CalcButton value="1" onClick={handleNumber}/>
    <CalcButton value="2" onClick={handleNumber}/>
    <CalcButton value="3" onClick={handleNumber}/>
    <CalcButton className="operator" value="-" onClick={handleOperator}/>

    <CalcButton value="C" onClick={handleClear}/>
    <CalcButton value="0" onClick={handleNumber}/>
    <CalcButton value="=" onClick={handleOperator}/>
    <CalcButton className="operator" value="+" onClick={handleOperator}/>
    

  </div>
  )
}
const CalcButton = (props) => (
  <button className={props.className} onClick={() =>props.onClick(props.value)}>{props.value}</button>
)

export default Calculator
