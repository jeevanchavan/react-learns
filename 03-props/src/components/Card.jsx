import React from 'react'

const Crad = (props) => {
  return (
    <div className="Card">
        <img src={props.img} alt="" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum harum, voluptatibus sunt </p>
        <button>Add Friend</button>
    </div>
  )
}

export default Crad