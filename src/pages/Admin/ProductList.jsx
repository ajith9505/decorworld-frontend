import React, { useEffect } from 'react'
import { useGetAllProductsQuery } from '../../api/productApiSlice'
import Loading from '../../components/Loading/Loading';
import Menu from './Menu';

const ProductList = () => {

    const { data: products, isLoading, isError } = useGetAllProductsQuery();

    if(isLoading) return <Loading />

    else if(isError) return <div>Can't load products</div>
    
    return (
        <div className='productlist-container'>
            <Menu />
            <div className='table-container'>
                <table className='product-table'>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Creater</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.countInStock}</td>
                                </tr>
                                
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList