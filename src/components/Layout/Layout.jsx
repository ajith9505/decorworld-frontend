import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Admin from "../../pages/Admin/Admin";
import Navigation from "../../pages/Auth/Navigation";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const [admin, setAdmin] = useState(true)



    return (
        <>
            <ToastContainer />
            <Navigation />
            <div className="main">
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout