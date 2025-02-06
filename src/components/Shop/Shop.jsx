import React, { useState, useEffect } from 'react'
import './Shop.css'
import Product from './Product'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Loader from '../Loader';
import { useGetAllProductsQuery } from '../../api/productApiSlice'
import { FaBars } from 'react-icons/fa'
 
const Shop = () => {

  const { data: products, isLoading } = useGetAllProductsQuery();

  if (isLoading) return <Loader />

  return (
    <>
    <div className='shop-page d-flex flex-column'>
      <section className='entry-banner'>
        <div className="container">
          <h1>Shop</h1>
          <div className="wrapper">
            <div className="inner-content">
              <ul className="d-flex">
                <li><Link to='/'>Home</Link></li>
                <li className='arrow text-light'><MdKeyboardDoubleArrowRight /></li>
                <li>Shopping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <main id="main" className="site-main">
        <div className="content-container px-5">
          <div className="d-flex align-items-center justify-content-between py-5">
            <p className="result-count">Showing all {products.length} results</p>
            <form method='get'>
              <select name="oderby" id="oderby" className="oderby">
                <option value='menu-order'>Default sorting</option>
                <option value='popularity'>Sort by Popularity</option>
                <option value='raing'>Sort by average rating</option>
                <option value='price'>Sort by price: low to high</option>
                <option value='price-desc'>Sort by price: high to low</option>
              </select>
            </form>
          </div>
          <div className="product-container">
            <div className="product row gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-5 row-cols-xl-3">
              {products.map(product => (<Product key={product._id} product={product}/>))}
            </div>
          </div>
        </div>
        <div>
        </div>
      </main>
      </div>
    </>
  )
}

export default Shop