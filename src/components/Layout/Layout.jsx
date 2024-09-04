import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import { useState } from "react";
import Admin from "../../pages/Admin/Admin";
import Navigation from "../../pages/Auth/Navigation";
import { ToastContainer } from 'react-toastify'

const Layout = () => {
    const [admin, setAdmin] = useState(true)



    return (
        <>
            <ToastContainer />
            <div className="main">
            <Navigation />
            <Outlet />
            </div>
        </>
    )
}

export default Layout