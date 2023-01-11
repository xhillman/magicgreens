import { useEffect } from 'react';
import { ICartItem } from '../../Store/slices/cartSlice';
import { useAppSelector } from '../../Store/hooks';
import CartItem from '../CartItem';

import './cart.css';

function Cart() {

  const stateCartItems = useAppSelector((state) => state.cart);

  let cartItemsObject = localStorage.getItem('cart');
  if (typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: ICartItem[] = JSON.parse(cartItemsObject);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const itemTotal = +cartItems.reduce((acc: number, item: ICartItem) => {
    return acc + (item.price * item.quantity);
  }, 0).toFixed(2);

  const taxAmount = +itemTotal * 0.0625;

  const grandTotal = +itemTotal + +taxAmount;

  useEffect(() => {
  }, [stateCartItems])

  return (
    <div id='cart'>
      <h1 className='cart-header'>Shopping Cart</h1>
      {
        cartItems.length === 0 && <p className='empty-cart'>Your cart is empty</p>
      }
      {
        cartItems.map((item: ICartItem) => {
          return (
            <CartItem 
              name={item.name} 
              price={item.price} 
              quantity={item.quantity}
              image={item.image}
            />
          )
        })
      }
      <div className='price-breakdown'>
        <p>Subtotal: {formatter.format(itemTotal)}</p>
        <p>Shipping: $0.00</p>
        <p>Tax: {formatter.format(taxAmount)}</p>
        <p className='grand-total'>Order Total: {formatter.format(grandTotal)}</p>
        <button className='checkout-button'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart;