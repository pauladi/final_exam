// StockManagement.js
import React, { useState } from 'react';

const StockManagement = ({ products, onUpdateStock }) => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [newStock, setNewStock] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedProductId || newStock < 0) {
      alert('Please select a product and enter a valid stock number');
      return;
    }

    onUpdateStock(selectedProductId, newStock);

    setSelectedProductId('');
    setNewStock(0);
  };

  return (
    <div>
      <h2>Stock Management</h2>
      <form onSubmit={handleSubmit}>
        <select value={selectedProductId} onChange={(e) => setSelectedProductId(e.target.value)}>
          <option value="">Select Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
        <input 
          type="number" 
          value={newStock} 
          onChange={(e) => setNewStock(Number(e.target.value))} 
          placeholder="New Stock" 
        />
        <button type="submit">Update Stock</button>
      </form>
    </div>
  );
};

export default StockManagement;
