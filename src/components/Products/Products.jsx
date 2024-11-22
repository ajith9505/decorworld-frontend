import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/productApiSlice';
import './Products.css'
import ImageSlide from './ImageSlide';

const Products = () => {
  const { id } = useParams();
  const { data: product, isLoading, refetch, error } = useGetProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <div className="product-container py-5">
        <div className="container">
          <div className='img'>
            <img src={product?.image} alt={product?.name} style={{
              height: '30rem ',
              marginLeft: '2rem'
            }} />
            {/* <ImageSlide /> */}
          </div>
          <div className="product-details">
            <div className="product-head">
              <div className="product-title">{product.name}</div>
              <div className="price-details">
                <div className="discount-details">
                  <span className="without-offer-price">{`₹ ${Math.ceil(product.price / 100 * 10 + product.price)}`}</span>
                  <span className="discount-percent">-10%</span>
                </div>
                <div className="current-price-details">
                  <div className="current-price">
                    <h3>₹ {product.price}</h3>
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