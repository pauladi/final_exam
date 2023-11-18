// TransactionManagement.js
import React, { useState } from 'react';

const TransactionManagement = ({ products, onAddTransaction }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedProduct || quantity <= 0) {
      alert('Please select a product and enter a valid quantity');
      return;
    }

    const transaction = { productId: selectedProduct, quantity };
    onAddTransaction(transaction);

    setSelectedProduct('');
    setQuantity(1);
  };

  return (
    <div>
      <h2>Transaction Management</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
          <option value="">Select Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          placeholder="Quantity" 
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionManagement;
