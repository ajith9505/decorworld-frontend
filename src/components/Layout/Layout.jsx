import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Navigation from "../../pages/Auth/Navigation";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import SearchBox from '../SearchBox';


const Layout = () => {
    const [showSidebar, setShowSidebar] = useState(false);



    return (
        <>
            <ToastContainer />
            <div className="main">
                <div className="d-flex">
                    <Navigation showSidebar={showSidebar} />
                    <div className="d-flex flex-column w-100">
                        <Header />
                        <SearchBox />
                        <Outlet />
                    </div>
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