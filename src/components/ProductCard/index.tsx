import './productCard.css'
import basil from '../../assets/basil.png'
// import butterhead from '../../assets/butterhead.png'

import { addToCart } from '../../Store/slices/cartSlice';
import { useAppDispatch } from '../../Store/hooks';
import { ICartItem } from '../../Store/slices/cartSlice'
import {useState} from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  image?: string;
}

function ProductCard(props: ProductCardProps) {

  const { name, price, image } = props;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();

  let item: ICartItem = {
    name: name,
    price: price,
    quantity: quantity,
    image
  }

  function handleClick() {
    dispatch(addToCart(item))
  }

  function handleQuantityChange(event: any) {
    setQuantity(event.target.value);
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="product-card">
      <img className='product-photo' src={image} height='200px'></img>
      <div className='product-info'>
        <h3>{name}</h3>
        <p>{formatter.format(price)}</p>
        <div className='add-to-cart-form'>
          <div className='quantity-form'>
            <label htmlFor='quantity'>Qty:</label>
            <select className='quantity-field' id='quantity' onChange={handleQuantityChange}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </div>
          <button
            className='add-to-cart-button'
            onClick={handleClick} >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;