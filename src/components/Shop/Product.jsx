import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setCart } from "../Cart/cartSlice"
import { Link, useNavigate, generatePath } from "react-router-dom"

const Product = ({ product }) => {

    const [id, setId] = useState('');
    const navigateTo = useNavigate()

    const handleClick = () => {
        const path = generatePath("/products/:id", { id })
        navigateTo(path)
    }

    useEffect(() => {
        setId(product._id)
    }, [id])

    const dispatch = useDispatch()

    const link = product?.image

    return (
        <>
            <div className="card p-0 m-3">
                < button onClick={handleClick}>
                    <img src={product.image} alt="loading..." width='100%' height='300px' />
                </button>
                <div className="card-body text-center">
                    <Link onClick={handleClick}>
                        <span className="card-title">{product.name}</span>
                    </Link>
                    <div className="price-details d-flex flex-row relative align-items-center justify-content-center">
                        <span className='original-price me-1'>{`${Math.ceil(product.price / 100 * 10 + product.price)} Rs`}</span>
                        <span className="text-success ms-1">10% Off</span>
                    </div>
                    <p className="card-text">{`${product.price} Rs`}</p>

                    <button onClick={() => dispatch(setCart({ data: [{ productName: product.name, price: product.price }] }))}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product