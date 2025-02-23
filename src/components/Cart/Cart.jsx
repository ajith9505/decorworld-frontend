import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, emptyCart } from './cartSlice';
import { useOrderMutation, useConfirmOrderMutation, useGetOrdersQuery } from '../../api/paymentApiSlice';

const Cart = () => {
    const { user } = useSelector(state => state.auth);
    const cartItems = useSelector(state => state.cart.data);
    const dispatch = useDispatch();
    const [order] = useOrderMutation();   
    const [confirmOrder] = useConfirmOrderMutation(); 

    const cartTotal = cartItems?.map(ele => ele.qty * ele.price).reduce((acc, current) => {
        return current + acc
    }, 0);
    
    const handleRemove = (id) => {
        dispatch(removeFromCart({ id: id }));
    }

    const paymentHandler = async (e) => {
        e.preventDefault();
        try {
            const body = {
                amount: `${cartTotal * 100}`,
                currency: 'INR',
                receipt: 'receiptID'
            }
            const response = await order(body);

            const options = {
                key: "rzp_test_fANlv3LvQdbAx2",
                amount: `${cartTotal * 100}`,
                currency: "INR",
                name: "Decor World",
                description: "Test Transaction",
                order_id: response.data.id,
                handler: async function (paymentResponse) {
                    const body = {
                        ...paymentResponse, products: cartItems
                    };

                    try {
                        await confirmOrder(body)
                        dispatch(emptyCart());
                    } catch (validateError) {
                        console.error("Validation Error:", validateError);
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: "9000090000",
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.on("payment.failed", function (errorResponse) {
                alert(errorResponse.error.code);
            });
            rzp1.open();
        } catch (error) {
            console.error("Order Creation Error:", error);
        }
    };


    if (!cartItems.length) return <div style={{ minHeight: '60vh', width: '100%', textAlign: 'center', alignContent: 'center' }}>cart is empty</div>
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
                                    {cartTotal ? cartTotal : 0} Rs Rs
                                </div>
                            </div>
                            <div className="total d-flex justify-content-between my-3">
                                <div className='fw-bold'>Total</div>
                                <div className='fw-bold text-success'>
                                    {cartTotal ? cartTotal : 0} Rs
                                </div>
                            </div>
                            <div className="checkout-btn mt-4">
                                <button onClick={paymentHandler}>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart