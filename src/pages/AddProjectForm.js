// src/AddProjectForm.js

import React, { useState } from 'react';

const AddProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    pi: '',
    coPi: '',
    agency: '',
    category: 'individual',
    value: '',
    submissionDate: '',
    startDate: '',
    endDate: '',
    projectNumber: '',
    relatedTo: '',
    govtNonGovt: 'govt',
    department: '',
    type: 'funded',
    status: 'submitted',
    description: '',
    file: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    // Add code to handle form submission
    alert('Form submitted successfully!');
  };

  return (
    
    <div style={{ background: '#f4f4f4' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', margin: '20px auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2>Add Project</h2>
          <form id="projectForm" style={{ display: 'grid', gap: '10px' }}>
            <label htmlFor="projectName">Project Name:</label>
            <input type="text" id="projectName" name="projectName" required value={formData.projectName} onChange={handleInputChange} />

            <label htmlFor="pi">PI:</label>
            <input type="text" id="pi" name="pi" required value={formData.pi} onChange={handleInputChange} />

            <label htmlFor="coPi">Co PI:</label>
            <input type="text" id="coPi" name="coPi" value={formData.coPi} onChange={handleInputChange} />

            <label htmlFor="agency">Agency:</label>
            <input type="text" id="agency" name="agency" value={formData.agency} onChange={handleInputChange} />

            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
              <option value="individual">Individual</option>
              <option value="joint">Joint</option>
              <option value="institutional">Institutional Collaboration</option>
            </select>

            <label htmlFor="value">Value:</label>
            <input type="text" id="value" name="value" value={formData.value} onChange={handleInputChange} />

            <label htmlFor="submissionDate">Submission Date:</label>
            <input type="date" id="submissionDate" name="submissionDate" value={formData.submissionDate} onChange={handleInputChange} />

            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} />

            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} />

            <label htmlFor="projectNumber">Project Number:</label>
            <input type="text" id="projectNumber" name="projectNumber" value={formData.projectNumber} onChange={handleInputChange} />

            <label htmlFor="relatedTo">Related to:</label>
            <input type="text" id="relatedTo" name="relatedTo" value={formData.relatedTo} onChange={handleInputChange} />

            <label htmlFor="govtNonGovt">Govt/Non-Govt:</label>
            <select id="govtNonGovt" name="govtNonGovt" value={formData.govtNonGovt} onChange={handleInputChange}>
              <option value="govt">Government</option>
              <option value="non-govt">Non-Government</option>
            </select>

            <label htmlFor="department">Department:</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleInputChange} />

            <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={formData.type} onChange={handleInputChange}>
              <option value="funded">Funded Project</option>
              <option value="consultancy">Consultancy</option>
            </select>

            <label htmlFor="status">Status:</label>
            <select id="status" name="status" value={formData.status} onChange={handleInputChange}>
              <option value="submitted">Submitted</option>
              <option value="sanctioned">Sanctioned</option>
              <option value="ongoing">On-Going</option>
              <option value="completed">Completed</option>
            </select>

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>

            <label htmlFor="file">Choose File:</label>
            <input type="file" id="file" name="file" accept=".pdf" required onChange={handleInputChange} />

            <button type="button" onClick={submitForm} style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjectForm;
