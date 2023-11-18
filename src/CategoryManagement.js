// CategoryManagement.js
import React, { useState } from 'react';

const CategoryManagement = ({ onAddCategory }) => {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCategory(category);
    setCategory('');
  };

  return (
    <div>
      <h2>Category Management</h2>
      <form onSubmit={handleSubmit}>
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category Name" />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default CategoryManagement;
