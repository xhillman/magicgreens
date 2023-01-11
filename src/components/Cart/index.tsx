import { useEffect, useState } from 'react';
import { CartItem } from '../../Store/slices/cartSlice';
import { useAppSelector } from '../../Store/hooks';

import './cart.css';

function Cart() {

  const stateCartItems = useAppSelector((state) => state.cart);

  let cartItemsObject = localStorage.getItem('cart');
  if (typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: CartItem[] = JSON.parse(cartItemsObject);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const itemTotal = +cartItems.reduce((acc: number, item: CartItem) => {
    return acc + (item.price * item.quantity);
  }, 0).toFixed(2);

  const taxAmount = +itemTotal * 0.0625;

  const grandTotal = +itemTotal + +taxAmount;

  console.log('total', typeof itemTotal, itemTotal)

  useEffect(() => {
  }, [stateCartItems])

  return (
    <div id='cart'>
      <h1 className='cart-header'>Shopping Cart</h1>
      {
        cartItems.map((item: any) => {
          return (
            <div className='cart-item'>
              <div className='item-section'>
                <div className='item-info'>
                  <h3>{item.name} <span id='at-sign'>@</span> {formatter.format(item.price)}</h3>
                  <p>Qty: {item.quantity}</p>
                </div>
                <p>({formatter.format(item.price * item.quantity)})</p>
              </div>
              <button className='remove-from-cart'>Delete</button>
            </div>
          )
        })
      }
      <div className='price-breakdown'>
        <p>Subtotal: {formatter.format(itemTotal)}</p>
        <p>Shipping: $0.00</p>
        <p>Tax: {formatter.format(taxAmount)}</p>
        <p>Order Total: {formatter.format(grandTotal)}</p>
      </div>
    </div>
  )
}

export default Cart;