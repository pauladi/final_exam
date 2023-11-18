// ProductManagement.js
import React, { useState } from 'react';

const ProductManagement = ({ onAddProduct, categories }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({ name: '', price: '', stock: '', category: '' });
  };

  return (
    <div>
      <h2>Product Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Product Name" />
        <input name="price" type="number" value={newProduct.price} onChange={handleChange} placeholder="Price" />
        <input name="stock" type="number" value={newProduct.stock} onChange={handleChange} placeholder="stock" />
        <select name="category" value={newProduct.category} onChange={handleChange}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductManagement;
