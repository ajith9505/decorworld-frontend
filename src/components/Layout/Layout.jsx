import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Admin from "../../pages/Admin/Admin";
import Navigation from "../../pages/Auth/Navigation";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Layout = () => {
    const [admin, setAdmin] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);



    return (
        <>
            <ToastContainer />
            <div className="main">
                <div className="d-flex">
                    <Navigation showSidebar={showSidebar} />
                    <Outlet />
                    <div className={`nav-toggle ${showSidebar && 'active'}`}>
                        {showSidebar ? <FaTimes onClick={() => setShowSidebar(!showSidebar)} /> : <FaBars onClick={() => setShowSidebar(!showSidebar)} />}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout