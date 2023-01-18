import React from 'react'
import CardWidget from './CartWidget'; 
import { NavLink } from "react-router-dom"
import torre from '../assets/torre.svg'


const NavBar = (props) => {
    
    return (
        <div>
            <nav class="navbar navbar-light bg-light text-info">

                    <img class="navbar-brand" src={torre} width="30" height="30" class="d-inline-block align-top" alt=""/>
                    <NavLink className="header__link navbar-brand h1" to="/">Fortin</NavLink>
                    <NavLink className="nav-link hover-shadow" to="/category/camisetas">Camisetas</NavLink>
                    <NavLink className="nav-link hover-shadow" to="/category/merchandising">Merchandising</NavLink>
                    <NavLink className="nav-link hover-shadow" to="/category/indumentaria">Indumentaria</NavLink>
                    <CardWidget stock="3"/>

            </nav>
        </div>
    )
}

export default NavBar