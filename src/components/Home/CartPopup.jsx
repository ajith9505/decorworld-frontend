import React from 'react'
import { Link } from 'react-router-dom'

const CartPopup = () => {
    return (
        <>
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cart-header  d-flex justify-content-between">
                                <div className="header-text">Shopping cart</div>
                                <div className="cls-btn"><button>X</button></div>
                            </div>
                            <div className="added-products">
                            <div>No product added</div>
                            </div>
                            <div className="cart-footer">
                                <div className="ceckout-bt">
                                    <Link>Back To Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPopup