import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:"Jeevan", age:20})

  const btnClick = ()=>{
    let newNum = {...num};
    newNum.user = "Panni"
    newNum.age = 30
    setnum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClick}>Click!</button>
    </div>
  )
}

export default App