import { useEffect, useState } from 'react';
import { ICartItem } from '../../Store/slices/cartSlice';
import { useAppSelector, useAppDispatch } from '../../Store/hooks';
import { removeFromCart } from '../../Store/slices/cartSlice';
import basil from '../../assets/basil.png'
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

  const dispatch = useAppDispatch();

  function handleRemoveFromCart(item: ICartItem) {
    dispatch(removeFromCart(item))
  }

  useEffect(() => {
  }, [stateCartItems])

  return (
    <div id='cart'>
      <h1 className='cart-header'>Shopping Cart</h1>
      {
        cartItems.map((item: ICartItem) => {
          console.log('item', item)
          return (
            <CartItem name={item.name} price={item.price} quantity={item.quantity} />
            // <div className='cart-item'>
            //   <div className='item-section'>
            //     <div className='container'>
            //       <img className='item-photo' src={basil} height='100px'></img>
            //       <div className='item-info'>
            //         <h3>{item.name} <span id='at-sign'>@</span> {formatter.format(item.price)}</h3>
            //         <p>Qty: {item.quantity}</p>
            //       </div>
            //     </div>
            //     <p>({formatter.format(item.price * item.quantity)})</p>
            //   </div>
            //   <button className='remove-from-cart'>Delete</button>
            // </div>
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