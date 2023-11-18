// App.js
import React, { useState } from 'react';
import ProductManagement from './ProductManagement';
import CategoryManagement from './CategoryManagement';
import TransactionManagement from './TransactionManagement';
import StockManagement from './StockManagement';
import TransactionReport from './TransactionReport';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const addCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }]);
  };

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const updateStock = (productId, newStock) => {
    setProducts(products.map(product => 
      product.id === Number(productId) ? { ...product, stock: newStock } : product
    ));
  };

  return (
    <div className="App">
      <CategoryManagement onAddCategory={addCategory} />
      <ProductManagement onAddProduct={addProduct} categories={categories} />
      <TransactionManagement products={products} onAddTransaction={addTransaction} />
      <StockManagement products={products} onUpdateStock={updateStock} />
      <TransactionReport transactions={transactions} products={products} />
    </div>
  );
}

export default App;
