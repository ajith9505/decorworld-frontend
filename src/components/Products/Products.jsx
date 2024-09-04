import React from 'react'
import { useSelector } from 'react-redux';
import './Products.css'
import ImageSlide from './ImageSlide';

const Products = () => {

  return (
    <>
      <div className="product-container my-5">
        <div className="container">
          <ImageSlide />
          <div className="product-details">
            <div className="product-head">
              <div className="product-title">
                Hummingbird Art Print | Floral Bird Art | Digital Download | Nature Wall Decor | Hummingbird Wall Art | Instant Download | 4
              </div>
              <div className="price-details">
                <div className="discount-details">
                  <span className="without-offer-price">$9.99</span>
                  <span className="discount-percent">-31%</span>
                </div>
                <div className="current-price-details">
                  <div className="current-price">
                    <h3>$6.99</h3>
                  </div>
                </div>
              </div>
              <div className="stock">
                <span>In stock</span>
              </div>
              <div className="shipping-desc">
                <span>Shipping Calculated at Checkout</span>
              </div>
              <div className="qty-details">
                <div className="qty">
                  <span>Quantity</span>
                </div>
                <div className="qty-btn">
                  <span><button className='dec-btn'>-</button></span>
                  <span className='qty-num'>1</span>
                  <span><button className='inc-btn'>+</button></span>
                </div>
              </div>
              <div className="cart-section">
                <span><button className="cart-btn">Add to cart</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products