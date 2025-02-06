import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";

const Navbar = ({ showSidebar, setShowSidebar }) => {

    return (
        <>
            <nav className={`nav ${showSidebar && 'active'} justify-content-center`}>
                <div className="nav-container items-center">
                    <ul className='list list-inline ps-5 ms-5 mb-0'>
                        <li className='list-inline-item'><Link to="home">Home</Link></li>
                        <li className='list-inline-item'><Link to="shop">Shop</Link></li>
                        <li className='list-inline-item'><Link to="aboutUs">Contact Us</Link></li>
                        <li className='list-inline-item'><Link to="aboutUs">About Us</Link></li>
                    </ul>
                </div>
                    <div className= 'nav-close-btn'>
                        <FaTimes onClick={() => setShowSidebar(false)} />
                    </div>
            </nav>
        </>
    )
}

export default Navbar