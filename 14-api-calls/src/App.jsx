import React from 'react'

const App = () => {

  // const getData =()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((res)=>{
  //       return res.json();
  //     })
  //     .then((data)=>{
  //       console.log(data.title);
  //     })
  //     .catch(err => console.log(err));
  // }

  const getData = async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={getData}>GetData</button>
    </div>
  )
}

export default App