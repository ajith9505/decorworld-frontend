import React, { useState, useEffect } from 'react'
import './Shop.css'
import Product from './Product'
import axios from '../../api/axios'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from './productSlice'
// import { setLoading } from '../Loading/loadingSlice'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Loading from '../Loading/Loading'
 
const Shop = () => {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch()

  // const loading = useSelector(state => state.loading.data)
  const product = useSelector(state => state.product.data)

  const getProduct = async () => {

    try {

      await axios({
        url: '/product',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(response => {
        dispatch(setProduct({ data: response.data.product }))
      })
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
      // dispatch(setLoading({ data: false }))
    }

    // console.log(product);
  }

  useEffect(() => {

    getProduct()

  }, [])

  if (loading) return <Loading />

  return (
    <>
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
            <p className="result-count">Showing all 8 results</p>
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
            <div className="product row  gx-4 gx-lg-5 row-cols-sm-1 row-cols-md-5 row-cols-xl-3">
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
              <Product product={product} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Shop