import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Navigation from "../../pages/Auth/Navigation";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { BiMessageRoundedDetail } from "react-icons/bi";
import SearchBox from '../SearchBox';
import { useSelector } from "react-redux";


const Layout = () => {
    const user = useSelector(state => state?.auth?.user);
    
    return (
        <>
            <ToastContainer />
            <div className="main">
                <div className="d-flex">
                    <div className="d-flex flex-column w-100">
                       {user?.isAdmin ?  <Navigation /> : <Header />}
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout