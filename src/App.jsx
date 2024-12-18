import React from 'react'
import "./style/index.css"
import CategoryList from './components/CategoryList';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryList />
      <ProductList />
      <Footer />
    </div>
  )
}

export default App
