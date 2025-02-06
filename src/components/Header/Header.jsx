import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from "../../api/userApiSlice";
import { logout } from "../../api/authSlice";
import { LuLogOut } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";


const Header = () => {

    const cart = useSelector(state => state.cart.data)
    const { user } = useSelector((state) => state.auth);

    const [showSidebar, setShowSidebar] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApi] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApi().unwrap();
            dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header d-flex align-items-center">
                        <div className="logo d-flex align-items-center col-sm-2">
                            <div>Decoration</div>
                            <div>WORLD</div>
                        </div>
                        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                        <div className="part3 d-flex col-sm-10">
                            <div className="bag m-3" role='button' onClick={() => navigate('./cart')}>
                                <span><GiShoppingBag /></span>
                                <div className="count">{cart?.map(ele => ele.qty).reduce((acc,cv) => cv+acc, 0) || 0}</div>
                            </div>

                            {user ?
                                <div className='d-flex justify-content-center align-items-center gap-1 m-3'>
                                    <FaRegUser style={{ fontWeight: 'bold' }} />
                                    <span style={{ fontWeight: 'bold', marginRight: '10px' }}>{user?.name}</span>
                                </div>
                                :
                                <Link to={"login"}>Sign in</Link>
                            }

                            <div className="logout-btn">
                                {user && <LuLogOut onClick={logoutHandler} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className= 'nav-toggle'>
                    <FaBars onClick={() => setShowSidebar(true)} />
                </div>
            </header>
        </>
    )
}

export default Header