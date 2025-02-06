import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.data);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
       dispatch(removeFromCart({id: id}));
    }

    if(!cartItems.length) return <div style={{minHeight:'60vh', width:'100%', textAlign:'center', alignContent:'center'}}>cart is empty</div>
    return (
        <>
            <div className="cart-container">
                <div className="container">
                    <div className="heading">Cart</div>
                    <div className="row">
                        {
                            cartItems?.map((ele, index) => (
                                <div className="col-12 col-md-6 d-sm-flex p-5 align-items-start justify-content-center" key={index}>
                                    <div className="product-img me-5 mb-3">
                                        <img src={ele.img} alt="Product" width='140px' height='170px' />
                                    </div>
                                    <div className='d-flex gap-2 flex-column'>
                                        <div className="cart-product fw-bold">{ele.productName}</div>
                                        <div className="price">Price: {ele.price} Rs</div>
                                        <div className="quantity">Quantity: {ele.qty}</div>
                                        <div className="product-subtotal">Sub Total: {ele.qty * ele.price} Rs</div>
                                        <div>
                                            <button className='cart-remove-btn w-20' onClick={() => handleRemove(ele.id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <div className="cart-total-container">
                            <div className="total-heading mb-4">
                                <h2>Cart Totals</h2>
                            </div>
                            <div className="sub-total d-flex justify-content-between my-3">
                                <div>Subtotal</div>
                                <div>
                                    {cartItems ? cartItems?.map(ele => ele.qty * ele.price).reduce((acc, current) => {
                                        return current + acc
                                    }, 0) : 0} Rs
                                </div>
                            </div>
                            <div className="total d-flex justify-content-between my-3">
                                <div className='fw-bold'>Total</div>
                                <div className='fw-bold text-success'>
                                    {cartItems ? cartItems?.map(ele => ele.qty * ele.price).reduce((acc, current) => {
                                        return current + acc
                                    }, 0) : 0} Rs
                                </div>
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