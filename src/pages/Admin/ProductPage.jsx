import { useState } from 'react';
import Menu from './Menu';
import { useCreateProductMutation } from '../../api/productApiSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';

const ProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createProduct({ name, price, brand, quantity, description, image: imageUrl }).unwrap();
      toast.success(res)
      setName('');
      setPrice('');
      setQuantity(0);
      setBrand('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      toast.error(err?.data?.message || err.error);
    }
  }
  return (
    <div className="productpage container">
      <div className='page d-flex align-items-center p-4 flex-column'>
        <Menu />
        <div className="product-form">
          <div className="header">Create Product</div>
          <form action='#'>
            <div className='form-conatiner d-flex flex-column align-items-center'>

              {/* name input */}
              <div className='input mb-2' id='name-input'>
                <label htmlFor="name">Name</label> <br />
                <input type="text" name='name' onChange={(e) => setName(e.target.value)}  value={name}/>
              </div>

              {/* price input */}
              <div className='input mb-2' id='price-input'>
                <label htmlFor="price">Price</label> <br />
                <input type="number" name='price' onChange={(e) => setPrice(e.target.value)} value={price}/>
              </div>

              {/* quantity input */}
              <div className='input mb-2' id='quantity-input'>
                <label htmlFor="quantity">Quantity</label> <br />
                <input type="text" name='quantity' onChange={(e) => setQuantity(e.target.value)} value={quantity}/>
              </div>


              {/* brand input */}
              <div className='input mb-2' id='brand-input'>
                <label htmlFor="brand">Brand</label> <br />
                <input type="text" name='brand' onChange={(e) => setBrand(e.target.value)} value={brand}/>
              </div>

              {/* image input */}
              <div className='input mb-2' id='image-input'>
                <label htmlFor="image">Image</label> <br />
                <input type="text" name='image' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl}/>
              </div>

              {/* description input */}
              <div className='input mb-2' id='name-input'>
                <label htmlFor="">Description</label> <br />
                <textarea type="text" name='description' onChange={(e) => setDescription(e.target.value)}  value={description}/>
              </div>

              <div className="submit-btn d-flex align-items-center">
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
                {isLoading && <Loader />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductPage