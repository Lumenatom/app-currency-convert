import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css"


const Navbar = () => {
    return (
        <div>
            <nav className={style.nav_main}>
                <NavLink className={style.nav} to='/usd'>UAH-USD</NavLink>
                <NavLink className={style.nav} to='/eur'>UAH-EUR</NavLink>
                <NavLink className={style.nav} to='/pln'>UAH-PLN</NavLink>
            </nav>
        </div>

    );
}






export default Navbar;