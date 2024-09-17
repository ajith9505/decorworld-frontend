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
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../../api/userApiSlice";
import { logout } from "../../api/authSlice";
// import { logOut } from "../../redux/features/auth/authSlice";
// import FavoritesCount from "../Products/FavoritesCount";

const Navigation = () => {
    const { user } = useSelector((state) => state.auth);
    //   const { cartItems } = useSelector((state) => state.cart);
    console.log(user);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
            className={`${showSidebar ? "hidden" : "d-flex"}`}
        >

            <div id="user" className="d-flex justify-content-center align-items-center gap-3">
                <div id="user-icon" >
                    <AiOutlineUser />
                </div>
                {user ? (
                    <span >{user.name}</span>
                ) : (
                    <></>
                )}
                {user && (
                    <button onClick={toggleDropdown} style={{ backgroundColor: 'rgba(0,0,0,0.0)', border: '0px' }}>
                        <FaChevronDown className={dropdownOpen && 'active'} />
                    </button>
                )}

                {dropdownOpen && user && (
                    <ul style={{
                        position: 'absolute',
                        top: '110px',
                        right: '0px',
                        marginTop: '8px',
                        marginRight: '56px',
                        backgroundColor: '#f2f2f2',
                        color: '#4a5568',
                        zIndex: '99',
                        padding: '0px'
                    }}>
                        <li>
                            <Link to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button onClick={logoutHandler} >Logout</button>
                        </li>
                    </ul>
                )}
            </div>

            {user?.isAdmin ?
                <div className="d-flex flex-column justify-content-center gap-3">
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineHome className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Dashbord</span>{" "}
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineShopping className="me-2 mt-3" size={20} />
                        <div>
                            <span className="hidden nav-item-name mt-3">Products</span>{" "}
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineShoppingCart className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Orders</span>{" "}
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <FaHeart className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Users</span>{" "}
                    </Link>
                </div>
                :
                <div className="d-flex flex-column justify-content-center gap-3">
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineHome className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Home</span>{" "}
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineShopping className="me-2 mt-3" size={20} />
                        <div>
                            <span className="hidden nav-item-name mt-3">Shop</span>{" "}
                        </div>
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <AiOutlineShoppingCart className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Cart</span>{" "}
                    </Link>
                    <Link
                        to="/"
                        className="nav-link d-flex align-items-center"
                    >
                        <FaHeart className="me-2 mt-3" size={20} />
                        <span className="hidden nav-item-name mt-3">Favorites</span>{" "}
                    </Link>
                </div>}

            {!user && <ul className="p-0">
                <li>
                    <Link
                        id='login-btn'
                        to="/login"
                        className="d-flex align-items-center"
                    >
                        <AiOutlineLogin size={20} />
                        <span className="hidden nav-item-name">LOGIN</span>
                    </Link>
                </li>
                <li>
                    <Link
                        id='register-btn'
                        to="/register"
                        className="d-flex align-items-center hover:translate-x-2"
                    >
                        <AiOutlineUserAdd size={20} />
                        <span className="hidden nav-item-name">REGISTER</span>
                    </Link>
                </li>
            </ul>}
        </div >
    );
};

export default Navigation;

{/* <div className="flex flex-col justify-center space-y-4">
                <Link
                    to="/"
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <AiOutlineHome className="mr-2 mt-[3rem]" size={20} />
                    <span className="hidden nav-item-name mt-[3rem]">HOME</span>{" "}
                </Link>

                <Link
                    to="/shop"
                    className="flex items-center transition-transform transform hover:translate-x-2"
                >
                    <AiOutlineShopping className="mr-2 mt-[3rem]" size={20} />
                    <span className="hidden nav-item-name mt-[3rem]">SHOP</span>{" "}
                </Link>

                <Link to="/cart" className="flex relative">
                    <div className="flex items-center transition-transform transform hover:translate-x-2">
                        <AiOutlineShoppingCart className="mt-[3rem] mr-2" size={20} />
                        <span className="hidden nav-item-name mt-[3rem]">Cart</span>{" "}
                    </div>

                    <div className="absolute top-9">
                        {cartItems.length > 0 && (
                            <span>
                                <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                                </span>
                            </span>
                        )}
                    </div>
                </Link>

                <Link to="/favorite" className="flex relative">
                    <div className="flex justify-center items-center transition-transform transform hover:translate-x-2">
                        <FaHeart className="mt-[3rem] mr-2" size={20} />
                        <span className="hidden nav-item-name mt-[3rem]">
                            Favorites
                        </span>{" "}
                        <FavoritesCount />
                    </div>
                </Link>
            </div>

            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center text-gray-800 focus:outline-none"
                >
                    {user ? (
                        <span className="text-white">{user.username}</span>
                    ) : (
                        <></>
                    )}
                    {user && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ml-1 ${dropdownOpen ? "transform rotate-180" : ""
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                            />
                        </svg>
                    )}
                </button>

                {dropdownOpen && user && (
                    <ul
                        className={`absolute right-0 mt-2 mr-14 space-y-2 bg-white text-gray-600 ${!user.isAdmin ? "-top-20" : "-top-80"
                            } `}
                    >
                        {user.isAdmin && (
                            <>
                                <li>
                                    <Link
                                        to="/admin/dashboard"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/productlist"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/categorylist"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Category
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/orderlist"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/admin/userlist"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Users
                                    </Link>
                                </li>
                            </>
                        )}

                        <li>
                            <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={logoutHandler}
                                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                )}
                {!user && (
                    <ul>
                        <li>
                            <Link
                                to="/login"
                                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
                            >
                                <AiOutlineLogin className="mr-2 mt-[4px]" size={20} />
                                <span className="hidden nav-item-name">LOGIN</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/register"
                                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
                            >
                                <AiOutlineUserAdd size={20} />
                                <span className="hidden nav-item-name">REGISTER</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div> */}