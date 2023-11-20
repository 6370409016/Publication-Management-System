// src/AwardsPage.js
import React, { useState } from 'react';
import "../Styles/AwardPage.css"

const AwardsPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    issuedBy: '',
    membershipRequired: 'yes',
    criteria: '',
    nationalInternational: 'national',
    fundingFor: 'research',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    // Add code to handle form submission
    alert('Awards details submitted successfully!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '800px', margin: '20px auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Awards Page</h2>
        <form id="awardsForm" style={{ display: 'grid', gap: '15px' }}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required value={formData.title} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required value={formData.date} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />

          <label htmlFor="issuedBy">Issued By:</label>
          <input type="text" id="issuedBy" name="issuedBy" required value={formData.issuedBy} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />

          <label htmlFor="membershipRequired">Is membership required?</label>
          <select id="membershipRequired" name="membershipRequired" value={formData.membershipRequired} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="criteria">Criteria for Award:</label>
          <input type="text" id="criteria" name="criteria" required value={formData.criteria} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />

          <label htmlFor="nationalInternational">National/International:</label>
          <select id="nationalInternational" name="nationalInternational" value={formData.nationalInternational} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
            <option value="national">National</option>
            <option value="international">International</option>
          </select>

          <label htmlFor="fundingFor">Funding for:</label>
          <select id="fundingFor" name="fundingFor" value={formData.fundingFor} onChange={handleInputChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}>
            <option value="research">Research</option>
            <option value="academics">Academics</option>
            <option value="fellowship">Fellowship</option>
            <option value="chairProfessor">Chair Professor</option>
            <option value="extensionActivities">Extension Activities</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} style={{ width: '100%', height: '150px', padding: '8px', boxSizing: 'border-box', resize: 'vertical' }}></textarea>

          <button type="button" onClick={submitForm} style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AwardsPage;
