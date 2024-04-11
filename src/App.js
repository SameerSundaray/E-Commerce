import React from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ProductsScreen from './components/ProductsScreen';
import Cart from './components/Cart';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <ProductsScreen products={productsArr} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
