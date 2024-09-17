import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Layout from './components/Layout/Layout'
import Layout from './components/Layout/Layout'
import Shop from './components/Shop/Shop'
import AboutUs from './components/AboutUs/AboutUs'
import Cart from './components/Cart/Cart'
import ScrollToTop from './components/Scroll/ScrollToTop'
import Products from './components/Products/Products'
import Admin from './pages/Admin/Admin'
import Navigation from './pages/Auth/Navigation'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import RequireAuth from './pages/Auth/RequireAuth'
import UpdateProfile from './pages/User/UpdateProfile'
import AdminRoute from './pages/Admin/AdminRoute'
import UserList from './pages/Admin/UserList'


function App() {

  return (
    <Router>
      <Routes>

        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/' element={<Layout />}>

          {/* public routes */}

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/admin-dashbord' element={<Admin />} />

          {/* protected routes */}

          <Route element={<RequireAuth />}>
            <Route path='/profile' element={<UpdateProfile />} />
          </Route>

          {/* admin routes */}

          <Route path='/admin' element={<AdminRoute />}>
            <Route path='/admin/userlist' element={<UserList />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App

// git remote add origin https://github.com/ajith9505/onlineStore-frontend.git
// git branch -M main
// git push -u origin main
