import React, { useEffect } from 'react';
import "../Styles/Report.css";

const Report = () => {
  const employees = [
    { id: 1, name: 'Chandan Kumar Sahu', department: 'IT', position: 'Developer' },
    { id: 2, name: 'Badal Behera', department: 'HR', position: 'Manager' },
    { id: 3, name: 'SK Sirajul Islam', department: 'Finance', position: 'Analyst' },
    { id: 4, name: 'Sudhansu Moharana', department: 'Marketing', position: 'Coordinator' },
    { id: 5, name: 'Biswopati Samal', department: 'IT', position: 'Designer' },
    { id: 6, name: 'Sai Somya Ranjan Pati', department: 'HR', position: 'Assistant' }
  ];

  useEffect(() => {
    initCalendar();
    displayEmployees();
  }, );

  const displayEmployees = () => {
    const tableBody = document.querySelector('#employeeTable tbody');
    tableBody.innerHTML = '';

    employees.forEach(employee => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${employee.id}</td>
                       <td>${employee.name}</td>
                       <td>${employee.department}</td>
                       <td>${employee.position}</td>`;
      tableBody.appendChild(row);
    });
  };

  const initCalendar = () => {
    // Calendar initialization code (FullCalendar)
    // Example:
    // $('#calendar').fullCalendar({ ... });
  };

  const searchEmployee = () => {
    const employeeId = document.getElementById('employeeId').value;
    const result = employees.find(employee => employee.id === employeeId);

    if (result) {
      alert(`Employee found: ${result.name}`);
    } else {
      alert('Employee not found');
    }
  };

  const submitEmployee = () => {
    // Add logic to handle form submission and update the 'employees' array
    // For simplicity, let's just add a new employee to the array
    const newEmployee = { id: 7, name: 'New Employee', department: 'New Department', position: 'New Position' };
    employees.push(newEmployee);

    // Refresh the table
    displayEmployees();
  };

  const exportData = () => {
    // Add logic to export data (e.g., to CSV, Excel, etc.)
    // For simplicity, let's just log the data to the console
    console.log(employees);
  };

  const sendQuickMail = () => {
    const mailSubject = document.getElementById('mailSubject').value;
    const mailContent = document.getElementById('mailContent').value;

    // Add logic to send the mail
    // For simplicity, let's just log the mail details to the console
    console.log(`Subject: ${mailSubject}\nContent: ${mailContent}`);
  };

  return (
    <div className='report-body'>
      <h2>Employee Wise Report</h2>

      {/* Employee Wise Report Table */}
      <table id="employeeTable">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {/* Employee data will be dynamically added here */}
        </tbody>
      </table>

      {/* Search Employee Form */}
      <div className="search-form">
        <h2>Search Employee</h2>
        <label htmlFor="employeeId">Employee ID:</label>
        <input type="text" id="employeeId" placeholder="Enter Employee ID" />
        <button onClick={searchEmployee}>Search</button>
      </div>

      {/* Submit Form */}
      <div className="submit-form">
        <h2>Submit Employee</h2>
        {/* Add your form fields here for submitting employee information */}
        <button onClick={submitEmployee}>Submit</button>
      </div>

      {/* Export Button */}
      <div className="export-button">
        <button onClick={exportData}>Export Data</button>
      </div>

      {/* Calendar Container */}
      <div className="calendar-container">
        <div id="calendar"></div>
      </div>

      {/* Quick Mail Container */}
      <div className="quick-mail-container">
        <h2>Quick Mail</h2>
        <div className="quick-mail-form">
          <label htmlFor="mailSubject">Subject:</label>
          <input type="text" id="mailSubject" placeholder="Enter subject" />
          <label htmlFor="mailContent">Content:</label>
          <textarea id="mailContent" placeholder="Enter mail content"></textarea>
          <button onClick={sendQuickMail}>Send Mail</button>
        </div>
      </div>
    </div>
  );
};

export default Report;
