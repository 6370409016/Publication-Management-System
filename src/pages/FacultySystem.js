
import "../Styles/FacultySystem.css"
import React, { useState } from "react";

export default function FacultySystem() {
    const [profileImage, setProfileImage] = useState('placeholder.jpg');
    const [formData, setFormData] = useState({
      empId: '',
      name: '',
      mobile: '',
      designation: '',
      highestQualification: '',
      campus: '',
      school: '',
      department: '',
      dateOfJoining: '',
      awardingUniversity: '',
      country: '',
      googleScholarLink: '',
    });
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      // Add logic to handle form submission (e.g., send data to the server)
      alert('Profile submitted!');
    };
  
    return (
      <div className="Facultysystem">
        <header>
          <h1>FacultySystem</h1>
        </header>
  
        <div className="container">
          <div id="profile-image-container">
            <img id="profile-image" src={profileImage} alt="User's profile" />
            <input type="file" id="image-input" accept="image/*" onChange={handleImageChange} />
            <label htmlFor="image-input">Change Profile Picture</label>
          </div>
  
          <form className="profile-form">
            <label htmlFor="emp-id">Employee ID:</label>
            <input
              type="text"
              id="emp-id"
              name="empId"
              value={formData.empId}
              onChange={handleInputChange}
            />
  
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
  
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
  
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
  
            <label htmlFor="highest-qualification">Highest Qualification:</label>
            <input
              type="text"
              id="highest-qualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleInputChange}
            />
  
            <label htmlFor="campus">Campus:</label>
            <input
              type="text"
              id="campus"
              name="campus"
              value={formData.campus}
              onChange={handleInputChange}
            />
  
            <label htmlFor="school">School:</label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
            />
  
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
            />
  
            <label htmlFor="date-of-joining">Date of Joining:</label>
            <input
              type="date"
              id="date-of-joining"
              name="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleInputChange}
            />
  
            <label htmlFor="awarding-university">Awarding University:</label>
            <input
              type="text"
              id="awarding-university"
              name="awardingUniversity"
              value={formData.awardingUniversity}
              onChange={handleInputChange}
            />
  
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
  
            <label htmlFor="google-scholar-link">Google Scholar Link:</label>
            <input
              type="text"
              id="google-scholar-link"
              name="googleScholarLink"
              value={formData.googleScholarLink}
              onChange={handleInputChange}
            />
  
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}
