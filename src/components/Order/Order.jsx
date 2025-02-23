import React from 'react'
import { useGetOrdersQuery } from '../../api/paymentApiSlice'
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const Order = () => {
    const { data: orders, isLoading } = useGetOrdersQuery();

    if (isLoading) return <div className='vh-100 w-100 d-flex justify-content-center align-items-center'><Loader /></div>
    return (
        <div>
            <div className='text-bolder ms-5 ps-5 ms-t p-5' style={{ fontWeight: '500', fontSize: '2rem' }}>My Orders</div>
            <div className='d-flex justify-content-center align-items-center w-100 p-3 gap-5 flex-column '>
                {orders?.map(ele => (
                    <div className='d-flex justify-content-center w-100 align-items-center m-3 gap-3' key={ele._id}>
                        <Link to={`/products/${ele.productId}`}><img style={{ height: '200px', width: '150px' }} src={ele.img} alt="Loading..." /></Link>
                        <div className='w-50'>
                            <Link style={{ textDecoration: 'none' }} to={`/products/${ele.productId}`}>
                                <div style={{ fontWeight: '800', marginBottom: '10px' }}>{ele.productName}</div>
                            </Link>
                            <div style={{ fontWeight: '600' }}>OrderId: {ele.orderId}</div>
                            <div style={{ fontWeight: '600' }}>PaymentId: {ele.paymentId}</div>
                            <div style={{ fontWeight: '600' }}>Price: {ele.price}</div>
                            <div style={{ fontWeight: '600' }}>Quantity: {ele.qty}</div>
                            <div style={{ fontWeight: '600' }}>Ordered on: {new Date(ele.createdAt).toLocaleDateString()}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order