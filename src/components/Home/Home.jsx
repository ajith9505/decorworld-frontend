import React from 'react'
import './Home.css'
import Product from '../Shop/Product'
import { Link } from 'react-router-dom'
import { FaLock } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";
import { RiMapPin2Line } from "react-icons/ri";
import CartPopup from './CartPopup';
import SearchBox from '../SearchBox';

const Home = () => {
  return (
    <>
      <div className="content">
      <SearchBox />
        <article className='post'>
          <div className='part-1'>
            <div className="layer">
            <div className="container">
              <div className="row text-center">
                <div className="start-text">
                  <h1>Bring Your Home to Life With Stunning Art</h1>
                </div>
              </div>
              <div className="link-btn">
                <Link>View Collection</Link>
              </div>
            </div>
            </div>
          </div>
          <div className="part-2">
            <div className="sec-header">
              <h2>Most Popular</h2>
            </div>
            <div className="products">
              <div className="container">
                <div className="row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-5 row-cols-xl-3">
                  {/* <Product />
                  <Product />
                  <Product />
                  <Product /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="part-3">
            <div className="container h-auto">
              <div className="img-box d-flex">
                <img width='350' height='450' src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg" alt="loading..." />
                <span>
                  <h3>Explore Our Exquisite Bag Collection Now!</h3>
                </span>
                <div>
                  <Link to='shop'>VIEW COLLECTION</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="part-4">
            <div className="container">
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <span>
                    <div className="icon-container">
                      <FaLock />
                    </div>
                    <h4>Secure Payments</h4>
                    <p>
                      Shop with confidence knowing that your transactions are safeguarded
                    </p>
                  </span>

                  <span>
                    <div className="icon-container">
                      <FaTruckFast />
                    </div>
                    <h4>Free Shipping</h4>
                    <p>
                    Shopping with no extra charges - savor the liberty of complimentary shipping on every order.
                    </p>
                  </span>

                  <span>
                    <div className="icon-container">
                      <TbReload />
                    </div>
                    <h4>Easy Returns</h4>
                    <p>
                    With our hassle-free Easy Returns, changing your mind has never been more convenient.
                    </p>
                  </span>

                  <span>
                    <div className="icon-container">
                      <RiMapPin2Line />
                    </div>
                    <h4>Order Tracking</h4>
                    <p>
                    Stay in the loop with our Order Tracking feature - from checkout to your doorstep.
                    </p>
                  </span>

                </div>
              </div>
            </div>
          </div>
          <div className="part-5">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div><h6>EXPLORE</h6></div>
                  <div>
                    <h2>Elevate your wardrobe, embrace timeless style!</h2>
                    <p>
                    Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!
                    </p>
                    </div>
                    <div className="link-btn">
                      <Link to='/shop'>SHOP NOW</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Home