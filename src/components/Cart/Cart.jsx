import React from 'react'
import './Cart.css'

const Cart = () => {
    return (
        <>
            <div className="cart-container">
                <div className="container">
                    <div className="heading">Cart</div>
                    <div className="row">
                        <div className="col">
                            <div className="table-header">
                                <div className="table-content-1"></div>
                                <div className="table-content-2">Product</div>
                                <div className="table-content-3">Price</div>
                                <div className="table-content-4">Quantity</div>
                                <div className="table-content-5">Subtotal</div>
                            </div>

                            <div className="table-content">
                                <div className="product-img">
                                    <img src="https://www.shoppershaven.com.au/cdn/shop/files/DeepPurpleFloral4-1.jpg?v=1721994399&width=516" alt="loding" width='70px' height='85px' />
                                </div>
                                <div className="cart-product">Deep Purple Floral Digital Art Print</div>
                                <div className="price">$149.99</div>
                                <div className="quatity">1</div>
                                <div className="product-subtotal">$149.99</div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-total">
                        <div className="cart-total-container">
                            <div className="total-heading mb-4">
                                <h2>Cart Totals</h2>
                            </div>
                            <div className="sub-total d-flex justify-content-between my-3">
                                <div>Subtotal</div>
                                <div>$149.99</div>
                                </div>
                                <div className="total d-flex justify-content-between my-3">
                                    <div>Total</div>
                                    <div>$149.99</div>
                                </div>
                            <div className="checkout-btn mt-4">
                                <button>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart