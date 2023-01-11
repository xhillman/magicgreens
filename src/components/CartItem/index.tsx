import basil from '../../assets/basil.png'
import {ICartItem} from '../../Store/slices/cartSlice'
import './cartItem.css'

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

function CartItem(props: ICartItem) {

  const { name, price, quantity } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className='cart-item'>
      <div className='item-section'>
        <div className='container'>
          <img className='item-photo' src={basil} height='100px'></img>
          <div className='item-info'>
            <p>{name} <span id='at-sign'>@</span> {formatter.format(price)}</p>
            <p>Qty: {quantity}</p>
          </div>
        </div>
        <p>({formatter.format(price * quantity)})</p>
      </div>
      <button className='remove-from-cart'>Delete</button>
    </div>
  )
}

export default CartItem;