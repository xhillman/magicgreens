import {useEffect, useState} from 'react';
import { CartItem } from '../../Store/slices/cartSlice';
import { useAppSelector } from '../../Store/hooks';

import './cart.css';

function Cart() {

  const stateCartItems = useAppSelector((state) => state.cart);

  let cartItemsObject = localStorage.getItem('cart');
  if(typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: CartItem[] = JSON.parse(cartItemsObject);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
  }, [stateCartItems])

  return (
    <div id='cart'>
      <h1 className='cart-header'>Shopping Cart</h1>
      {
        cartItems.map((item: any) => {
          return (
            <div className='cart-item'>
              <h3>{item.name}</h3>
              <p>{formatter.format(item.price)}</p>
              <p>Quantity: {item.quantity}</p>
              <button className='remove-from-cart'>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart;