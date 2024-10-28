import { useState } from "react";
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiOutlineShoppingCart,
    AiOutlineUser
} from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaBars, FaChevronDown, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../api/userApiSlice";
import { logout } from "../../api/authSlice";

const Navigation = ( {showSidebar} ) => {
    const { user } = useSelector((state) => state.auth);

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
        <div
            id="navigation-container"
            className= {showSidebar ? 'd-flex active' : 'd-flex'}
        >

            <div className="d-flex flex-column align-items-center">
                <div id="user-icon" >
                    <AiOutlineUser />
                </div>
                <div id="user" className="d-flex justify-content-center align-items-center gap-3">
                    {user ? (
                        <div className="user-name">{user.name}</div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="d-flex flex-column justify-content-center gap-3">
                <Link
                    to="/"
                    className="nav-link d-flex align-items-center"
                >
                    <div>
                        <AiOutlineHome className="me-2 mt-3" />
                    </div>
                    <span className="hidden nav-item-name mt-3">Home</span>{" "}
                </Link>
                <Link
                    to="/shop"
                    className="nav-link d-flex align-items-center"
                >
                    <div>
                        <AiOutlineShopping className="me-2 mt-3" />
                    </div>
                    <div>
                        <span className="hidden nav-item-name mt-3">Shop</span>{" "}
                    </div>
                </Link>
                <Link
                    to="/"
                    className="nav-link d-flex align-items-center"
                >
                    <div>
                        <AiOutlineShoppingCart className="me-2 mt-3" />
                    </div>
                    <span className="hidden nav-item-name mt-3">Cart</span>{" "}
                </Link>
                <Link
                    to="/"
                    className="nav-link d-flex align-items-center"
                >
                    <div>
                        <FaHeart className="me-2 mt-3" />
                    </div>
                    <span className="hidden nav-item-name mt-3">Favorites</span>{" "}
                </Link>
            </div>

            {user ?
                <ul>
                    <li
                        id="profile-btn"
                        className="d-flex align-items-center">
                        <Link to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li
                        id="logout-btn"
                        className="d-flex align-items-center"
                        onClick={logoutHandler}
                    >
                        Logout
                    </li>
                </ul>
                :
                <ul className="p-0">
                    <li>
                        <Link
                            id='login-btn'
                            to="/login"
                            className="d-flex align-items-center"
                        >
                            <AiOutlineLogin />
                            <span className="hidden nav-item-name">LOGIN</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            id='register-btn'
                            to="/register"
                            className="d-flex align-items-center hover:translate-x-2"
                        >
                            <AiOutlineUserAdd />
                            <span className="hidden nav-item-name">REGISTER</span>
                        </Link>
                    </li>
                </ul>}
        </div >

    );
};

export default Navigation;