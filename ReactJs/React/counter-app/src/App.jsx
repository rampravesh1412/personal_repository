import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;

  let [counter , changeCounter] = useState(0);

  const addfun = () => {
    // counter = counter + 1;
    // console.log(counter)

    if (counter<20) {
      changeCounter(counter + 1)
    // console.log(counter)
    } else {
      console.log("Counter is grater than 20")
      
    }

  
  }

  const subfun = () => {
    if (counter>0) {
      changeCounter(counter - 1);
      
    } else {
      console.log("not move to negative value")
      
    }
    
  }
  

  return (
    <>
     <h2>Counter:  {counter} </h2>
     <button onClick={addfun}>Add {counter}</button> 
     <br/>
     <button onClick={subfun}>Negative {counter}</button>
     h3

    </>
  )
}

export default App
