import { Outlet } from "react-router-dom";
import Navigation from "../../pages/Auth/Navigation";
import Layout from "./Layout";
import Footer from "../Footer/Footer";

const PageLayout = () => {
  return (
    <div>
        <Layout />
        <Footer />
    </div>
  )
}

export default PageLayout