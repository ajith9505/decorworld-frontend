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
                        to="/admin/userlist"
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