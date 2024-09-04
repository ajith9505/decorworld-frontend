import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Header = () => {

    const cart = useSelector(state => state.cart.data)

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header d-flex d-flex align-items-center">
                        <Navbar />

                        <div className="logo d-flex align-items-center col-sm-2">
                            <div>Decoration</div>
                            <div>WORLD</div>
                        </div>

                        <div className="part3 d-flex col-sm-10">
                            <div className='search d-flex align-items-center'>
                                <span className='search-box'>
                                    <input type="text" placeholder='Search for product'/>
                                </span>
                                <span><IoIosSearch /></span>
                            </div>
                            <div className="bag m-3">
                                <span><GiShoppingBag /></span>
                                <div className="count">{cart ? cart.length : 0}</div>
                            </div>
                            <span><FaRegUser /></span>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                    <div className="row">
                        <div className="logo d-flex align-items-center col-sm-2">
                            <img src={logo} alt="fasion shop" />
                        </div>
                        <div className='part2 d-flex align-items-center col-sm-10'>
                            <input type="text" placeholder='Search for products...' />
                        </div>
                        <div className="part3 d-flex align-items-center justify-content-center col-sm-10">
                            <span><CgShoppingBag /></span>
                            <span className='ms-2'><FaRegHeart /></span>
                            <span className='ms-2'><FaRegUser /></span>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className="container">
                        <div className="row">
                            <div className="nav d-flex align-items-center col-sm-10">
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'><Link to="/">Women</Link></li>
                                    <li className='list-inline-item'><Link to="/">Men</Link></li>
                                    <li className='list-inline-item'><Link to="/">Kids</Link></li>
                                    <li className='list-inline-item'><Link to="/">Sports</Link></li>
                                    <li className='list-inline-item'><Link to="/">Brands</Link></li>
                                    <li className='list-inline-item'><Link to="/">New</Link></li>
                                    <li className='list-inline-item'><Link to="/">Sale</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav> */}
            </header>
        </>
    )
}

export default Header