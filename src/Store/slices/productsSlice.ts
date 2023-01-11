import {createSlice} from '@reduxjs/toolkit';
import {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface Product {
  name: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
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
      image: '../../assets/butterhead.png',
    },
    {
      name: 'Loose-Leaf Lettuce',
      price: 2.99,
      quantity: 100,
      category: 'leafy green',
      image: '../../assets/looseleaf.png',
    },
    {
      name: 'Batvia Lettuce',
      price: 3.49,
      quantity: 100,
      category: 'leafy green',
      image: '../../assets/batavia.png',
    },
    {
      name: 'Romaine Lettuce',
      price: 2.99,
      quantity: 100,
      category: 'leafy green',
      image: '../../assets/romaine.png',
    },
    {
      name: 'Spinach',
      price: 2.79,
      quantity: 100,
      category: 'leafy green',
      image: '../../assets/spinach.png',
    },
    {
      name: 'Kale',
      price: 3.29,
      quantity: 100,
      category: 'leafy green',
      image: '../../assets/kale.png',
    },
    {
      name: 'Basil',
      price: 2.49,
      quantity: 100,
      category: 'herb',
      image: '../../assets/basil.png',
    },
    {
      name: 'Parsley',
      price: 2.19,
      quantity: 100,
      category: 'herb',
      image: '../../assets/parsley.png',
    },
    {
      name: 'Rosemary',
      price: 1.98,
      quantity: 75,
      category: 'herb',
      image: '../../assets/rosemary.png',
    },
    {
      name: 'Cilantro',
      price: 1.49,
      quantity: 50,
      category: 'herb',
      image: '../../assets/cilantro.png',
    },
    {
      name: 'Chives',
      price: 2.39,
      quantity: 100,
      category: 'herb',
      image: '../../assets/chives.png',
    },
    {
      name: 'Bell Pepper',
      price: 1.19,
      quantity: 200,
      category: 'vegetable',
      image: '../../assets/bellpeppers.png',
    },
    {
      name: 'Cucumber',
      price: .99,
      quantity: 100,
      category: 'vegetable',
      image: '../../assets/cucumber.png',
    },
    {
      name: 'Green Beans',
      price: 3.29,
      quantity: 100,
      category: 'vegetable',
      image: '../../assets/greenbeans.png',
    },
    {
      name: 'Tomato',
      price: 1.69,
      quantity: 200,
      category: 'vegetable',
      image: '../../assets/tomato.png',
    },
    {
      name: 'Cherry Tomatoes',
      price: 3.99,
      quantity: 100,
      category: 'vegetable',
      image: '../../assets/cherrytomato.png',
    },
    {
      name: 'Zucchini',
      price: 1.98,
      quantity: 100,
      category: 'vegetable',
      image: '../../assets/zucchini.png',
    },
    {
      name: 'Blueberries',
      price: 6.09,
      quantity: 100,
      category: 'berry',
      image: '../../assets/blueberries.png',
    },
    {
      name: 'Strawberries',
      price: 5.59,
      quantity: 100,
      category: 'berry',
      image: '../../assets/strawberries.png',
    },
    {
      name: 'Raspberries',
      price: 5.59,
      quantity: 100,
      category: 'berry',
      image: '../../assets/raspberries.png',
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

