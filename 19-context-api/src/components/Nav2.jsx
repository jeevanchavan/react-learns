import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const NAv2 = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
  return (
    <div className='nav2'>
        <h3>Home</h3>
        <h3>Contact</h3>
        <h3>Services</h3>
        <h3>About</h3>
        <h3>{theme}</h3>
    </div>
  )
}

export default NAv2