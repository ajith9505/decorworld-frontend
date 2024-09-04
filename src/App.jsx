import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Layout from './components/Layout/Layout'
import PageLayout from './components/Layout/PageLayout'
import Shop from './components/Shop/Shop'
import AboutUs from './components/AboutUs/AboutUs'
import Cart from './components/Cart/Cart'
import ScrollToTop from './components/Scroll/ScrollToTop'
import Products from './components/Products/Products'
import Admin from './pages/Admin/Admin'
import Navigation from './pages/Auth/Navigation'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to="/" />} />
        <Route path='/' element={<PageLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/admin-dashbord' element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App


//binary search
//two pointer algorithim
//dfs 
