import React from 'react'
import axios from 'axios'
import { useState } from 'react'

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

  // const getData = async ()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   const data = await res.json();
  //   console.log(data);
  // }

  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>GetData</button>

      <div>
        {data.map((elem,idx)=>{
          return <h1>Hello {elem.author} {idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App