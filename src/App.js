import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage/>} />
        <Route path='/product' element={<ProductPage/>} />
    </Routes>
    </Router>
  );
}

export default App;
