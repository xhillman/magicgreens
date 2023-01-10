import {createSlice} from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if(state.cart.some((item) => item.name === action.payload.name)) {
        state.cart = state.cart.map((item) => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.filter((item) => item.name !== action.payload.name);
    },
    increaseQuantity: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    },
    decreaseQuantity: (state, action: PayloadAction<CartItem>) => {
      state.cart = state.cart.map((item) => {
        if (item.name === action.payload.name) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;