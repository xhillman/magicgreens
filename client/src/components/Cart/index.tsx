import { useEffect } from 'react';
import { ICartItem } from '../../Store/slices/cartSlice';
import { useAppSelector } from '../../Store/hooks';
import CartItem from '../CartItem';

import './cart.css';

interface CartProps {
  setCartOpen: (value: boolean) => void;
}

function Cart(props: CartProps) {

  const stateCartItems = useAppSelector((state) => state.cart);
  const { setCartOpen } = props;

  let cartItemsObject = localStorage.getItem('cart');
  if (typeof cartItemsObject !== 'string') {
    cartItemsObject = '[]';
  }
  let cartItems: ICartItem[] = JSON.parse(cartItemsObject);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const itemTotal = +cartItems.reduce((total: number, item: ICartItem) => {
    return total + (item.price * item.quantity);
  }, 0).toFixed(2);

  const shippingCost = +itemTotal * 0.09;

  const grandTotal = +itemTotal + +shippingCost;

  useEffect(() => {
  }, [stateCartItems])

  return (
    <div id='cart'>
      <button className='close-button' onClick={() => setCartOpen(false)}>x</button>
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
              key={item.name}
            />
          )
        })
      }
      <div className='price-breakdown'>
        <p>Subtotal: {formatter.format(itemTotal)}</p>
        <p>Shipping: {formatter.format(shippingCost)}</p>
        <p className='grand-total'>Order Total: {formatter.format(grandTotal)}</p>
        <button className='checkout-button'><a className="checkout-link" href="/checkout">Checkout</a></button>
      </div>
    </div>
  )
}

export default Cart;