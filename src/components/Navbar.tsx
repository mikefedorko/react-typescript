import React from 'react'
import {NavLink} from 'react-router-dom';


export const Navbar: React.FC = () => {
    return(
    <nav className = 'teal'>
        <div className="nav-wrapper pd-l">
          <a href="/" className="brand-logo">React + Typescript</a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Список</NavLink></li>
            <li><NavLink to="/about">Информация</NavLink></li>
          </ul>
        </div>
    </nav>
    )
} 


