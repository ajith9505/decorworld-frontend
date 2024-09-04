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
        setId(product[0]._id)
    }, [id])

    const dispatch = useDispatch()

    const link = product[0]?.imgLink[0]

    return (
        <>
            <div className="card p-0 m-3">
                < button onClick={handleClick}>
                    <img src={link} alt="loading..." width='100%' height='200px' />
                </button>
                <div className="card-body text-center">
                    <Link onClick={handleClick}>
                        <p className="card-title">{product[0]?.productName}</p>
                    </Link>
                    <p className="card-text">{`$${product[0]?.price}`}</p>
                    <p className='original-price'>$199.00</p>

                    <button onClick={() => dispatch(setCart({ data: [{ productName: product[0].productName, price: product[0].price }] }))}>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default Product