import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    
    return (
        localStorage.getItem('user') ? <Outlet /> : <Navigate to="/login" />
    );
}

export default RequireAuth;