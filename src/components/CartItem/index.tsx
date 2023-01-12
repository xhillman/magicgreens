import { ICartItem } from '../../Store/slices/cartSlice'
import { useAppDispatch } from '../../Store/hooks';
import { removeFromCart } from '../../Store/slices/cartSlice';
import { useState } from 'react';
import './cartItem.css'


function CartItem(props: ICartItem) {

  const { name, price, quantity, image } = props;
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dispatch = useAppDispatch();

  const item = {
    name,
    price,
    quantity
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item))
  }

  function handleQuantityChange(event: any) {
    setItemQuantity(event.target.value);
  }

  return (
    <div className='cart-item'>
      <div className='item-section'>
        <div className='container'>
          <img className='item-photo' src={image} height='100px'></img>
          <div className='item-info'>
            <p>{name} <span id='at-sign'>@</span> {formatter.format(price)}</p>
            <div className='quantity-section'>
              <label htmlFor='quantity'>Qty:</label>
              <select className='quantity-field' id='quantity' defaultValue={itemQuantity} onChange={handleQuantityChange}>
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
          </div>
        </div>
        <p>{formatter.format(price * itemQuantity)}</p>
      </div>
      <button className='remove-from-cart' onClick={handleRemoveFromCart}>Delete</button>
    </div>
  )
}

export default CartItem;