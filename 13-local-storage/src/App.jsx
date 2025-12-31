import React from 'react'

const App = () => {

  // const usename = localStorage.getItem('user');
  // console.log(usename)

  // let users = {
  //   username :'Karan',
  //   age: 23,
  //   address : 'abcd',
  // }

  // localStorage.setItem('user',JSON.stringify(users));

  const obj = JSON.parse(localStorage.getItem('user'));
  console.log(obj.username)
  
  
  return (
    <div>App</div>
  )
}

export default App