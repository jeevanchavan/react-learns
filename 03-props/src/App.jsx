import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
      <Card user="Karan Patil" age={23} img="https://i.pinimg.com/1200x/d2/e2/93/d2e29398e3dbd94d9aa4d2d48204b9c2.jpg"/>
      <Card user="Jeevan Chavan" age={21} img="https://i.pinimg.com/736x/13/8b/7d/138b7d6c6ccab901086de95195842f1f.jpg"/>
      <Card user="Shivam" age={29} img="https://i.pinimg.com/1200x/7d/f3/a0/7df3a0c955ff15a96147e799aece0a5d.jpg"/>
      <Card user="Sarthak" age={25} img="https://i.pinimg.com/736x/1e/e1/be/1ee1be45ad7a6e1e931c8a7571e35291.jpg"/>
    </div>
  )
}

export default App