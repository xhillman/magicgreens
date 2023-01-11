import {useState} from 'react';
import { CartItem } from '../../Store/slices/cartSlice';

import './cart.css';

function Cart() {

  let cartItemsObject = localStorage.getItem('cart');
  if(typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: CartItem[] = JSON.parse(cartItemsObject);
  
  console.log('cartItems', typeof cartItems, cartItems)

  return (
    <div id='cart'>
      <h1>Cart</h1>
      {
        cartItems.map((item: any) => {
          return (
            <div className='cart-item'>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart;