import React from 'react'

const App = () => {

  const formHandler = (e)=> {
    e.preventDefault();
    console.log("Form handled");
    
  }

  return (

    <div>
      <form onSubmit={(e)=>{
        formHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App