import React from 'react'

const App = () => {

  return (
    <div>
      <h1>Jeevan, Hello</h1>

      <button onClick={function(){
        console.log("hii hii gyusghsuhs");
        
      }}>Click Me!</button>

      <input onChange={(elem)=>{
        console.log(elem.target)
      }} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App