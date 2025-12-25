import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const formHandler = (e)=> {
    e.preventDefault();
    console.log("Form submmited by",title);

    setTitle('')
  }

  return (

    <div>
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input type="text" 
              placeholder='Enter your name'
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
         /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App