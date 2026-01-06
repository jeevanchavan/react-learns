import React, { useContext } from 'react'
import NAv2 from './NAv2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
        <h1>Sheriyans</h1>
        <NAv2 />
    </div>
  )
}

export default Navbar