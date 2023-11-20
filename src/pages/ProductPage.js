// src/AddProductForm.js

import React, { useState } from 'react';
import "../Styles/ProductPage.css"

const ProductPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    income: '',
    peopleInvolved: '',
    status: 'pending',
    relatedTo: 'renewableEnergy',
    description: '',
    file: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    // Add code to handle form submission
    alert('Product added successfully!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '800px', margin: '20px auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Add Product</h2>
        <form id="productForm" style={{ display: 'grid', gap: '15px' }}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required value={formData.title} onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px' }} />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required value={formData.date} onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px' }} />

          <label htmlFor="income">Income:</label>
          <input type="text" id="income" name="income" required value={formData.income} onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px' }} />

          <label htmlFor="peopleInvolved">People Involved:</label>
          <input type="text" id="peopleInvolved" name="peopleInvolved" required value={formData.peopleInvolved} onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px' }} />

          <label htmlFor="status">Status:</label>
          <select id="status" name="status" value={formData.status} onChange={handleInputChange} required style={{ padding: '10px', fontSize: '16px' }}>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>

          <label htmlFor="relatedTo">Related to:</label>
          <select id="relatedTo" name="relatedTo" value={formData.relatedTo} onChange={handleInputChange} required style={{ padding: '10px', fontSize: '16px' }}>
            <option value="renewableEnergy">Renewable Energy</option>
            <option value="wasteManagement">Waste Management</option>
            <option value="waterConservation">Water Conservation</option>
            <option value="greeneryEnvironment">Greenery Environment</option>
            <option value="energy">Energy</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} style={{ height: '100px', padding: '10px', fontSize: '16px' }}></textarea>

          <label htmlFor="file">Choose File (PDF):</label>
          <input type="file" id="file" name="file" accept=".pdf" required onChange={handleInputChange} style={{ padding: '10px', fontSize: '16px' }} />

          <button type="button" onClick={submitForm} style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage ;