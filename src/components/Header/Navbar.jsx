import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='nav justify-content-center'>
                <div className="nav-container">
                    <div className="d-flex align-items-center">
                        <ul className='list list-inline mb-0'>
                            <li className='list-inline-item'><Link to="home">Home</Link></li>
                            <li className='list-inline-item'><Link to="shop">Shop</Link></li>
                            <li className='list-inline-item'><Link to="aboutUs">About Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar