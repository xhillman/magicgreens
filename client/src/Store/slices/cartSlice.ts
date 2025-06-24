import {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface ICartItem {
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartState {
  cart: ICartItem[];
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      if(state.cart.some((item) => item.name === action.payload.name)) {
        state.cart = state.cart.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(state.cart));
        return;
      } else {
        state.cart.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload.name);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;