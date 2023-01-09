import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      name: 'Butterhead Lettuce',
      price: 3.49,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Loose-Leaf Lettuce',
      price: 2.99,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Batvia Lettuce',
      price: 3.49,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Romaine Lettuce',
      price: 2.99,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Spinach',
      price: 2.79,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Kale',
      price: 3.29,
      quantity: 100,
      category: 'leafy green',
    },
    {
      name: 'Basil',
      price: 2.49,
      quantity: 100,
      category: 'herb',
    },
    {
      name: 'Parsley',
      price: 2.19,
      quantity: 100,
      category: 'herb',
    },
    {
      name: 'Rosemary',
      price: 1.98,
      quantity: 75,
      category: 'herb',
    },
    {
      name: 'Cilantro',
      price: 1.49,
      quantity: 50,
      category: 'herb',
    },
    {
      name: 'Chives',
      price: 2.39,
      quantity: 100,
      category: 'herb',
    },
    {
      name: 'Bell Pepper',
      price: 1.19,
      quantity: 200,
      category: 'vegetable',
    },
    {
      name: 'Cucumber',
      price: .99,
      quantity: 100,
      category: 'vegetable',
    },
    {
      name: 'Green Beans',
      price: 3.29,
      quantity: 100,
      category: 'vegetable',
    },
    {
      name: 'Tomato',
      price: 1.69,
      quantity: 200,
      category: 'vegetable',
    },
    {
      name: 'Grape Tomatoes',
      price: 3.99,
      quantity: 100,
      category: 'vegetable',
    },
    {
      name: 'Zucchini',
      price: 1.98,
      quantity: 100,
      category: 'vegetable',
    },
    {
      name: 'Blueberries',
      price: 6.09,
      quantity: 100,
      category: 'berry',
    },
    {
      name: 'Strawberries',
      price: 5.59,
      quantity: 100,
      category: 'berry',
    },
    {
      name: 'Raspberries',
      price: 5.59,
      quantity: 100,
      category: 'berry',
    }
  ],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(product => product.name === action.payload);
      state.products[productIndex].quantity += 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(product => product.name === action.payload);
      state.products[productIndex].quantity -= 1;
    },
  },
})

export const {increment, decrement} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.product;

export default productsSlice.reducer;

