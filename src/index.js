import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './store/productSlice';
import {NextUIProvider} from "@nextui-org/react";
import App from './App';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

ReactDOM.render(
  
  <NextUIProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </NextUIProvider>,
  document.getElementById('root')
);