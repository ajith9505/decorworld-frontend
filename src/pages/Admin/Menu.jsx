import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <button
                className={`dash-menu-btn ${isMenuOpen && "active"} rounded`}
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )}
            </button>

            {isMenuOpen && (
                <section className="dash-section">
                    <ul className="dash-list">
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/dashboard"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                Admin Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/categorylist"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                Create Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/product"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                Create Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/productlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                All Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/userlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                Manage Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="list-item rounded"
                                to="/admin/orderlist"
                                style={({ isActive }) => ({
                                    color: isActive ? "salmon" : "white",
                                })}
                            >
                                Manage Orders
                            </NavLink>
                        </li>
                    </ul>
                </section>
            )}
        </>
    )
}

export default Menu