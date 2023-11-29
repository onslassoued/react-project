import React from 'react'
import './css.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='header'>




            <div className="mobile">
                <a href="" className="TUN-on">
                    <h1>TUN-on</h1>
                    <h3>Tounes in a click ! </h3>

                </a>
            </div>

            <ul className="nav">
                <NavLink to={'/'} >
                <li className='home'> Home</li>
                </NavLink>
                <li> Gallery </li>
                <li>About</li>
                <li> Destination </li>
                <li> book </li>
            </ul>

        </div>
    )
}

export default Navbar
