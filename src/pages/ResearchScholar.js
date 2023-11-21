import React from 'react';
import "../Styles/ResearchScholar.css";

function ResearchScholar() {
  const submitForm = () => {
    // You can add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <div className="container">
      <h2>Add Research Scholar Guidance</h2>
      <form id="researchForm">
        <label htmlFor="scholarName">Name of Scholar:</label>
        <input type="text" id="scholarName" name="scholarName" required />

        <label htmlFor="supervision">Supervision:</label>
        <input type="text" id="supervision" name="supervision" required />

        <label htmlFor="yearOfRegistration">Year of Registration:</label>
        <input type="number" id="yearOfRegistration" name="yearOfRegistration" required />

        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" required />

        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" required />

        <label htmlFor="topic">Topic:</label>
        <input type="text" id="topic" name="topic" required />

        <label htmlFor="awardDate">Award Date:</label>
        <input type="date" id="awardDate" name="awardDate" required />

        <label htmlFor="principalSupervisorName">Principal Supervisor Name:</label>
        <input type="text" id="principalSupervisorName" name="principalSupervisorName" required />

        <label htmlFor="principalSupervisorAffiliation">Principal Supervisor Affiliation:</label>
        <input type="text" id="principalSupervisorAffiliation" name="principalSupervisorAffiliation" required />

        <label htmlFor="cosupervisorName">Co-supervisor(s) Name:</label>
        <input type="text" id="cosupervisorName" name="cosupervisorName" />

        <label htmlFor="cosupervisorAffiliation">Co-supervisor(s) Affiliation:</label>
        <input type="text" id="cosupervisorAffiliation" name="cosupervisorAffiliation" />

        <label htmlFor="articlesPublished">Total Articles Published:</label>
        <input type="number" id="articlesPublished" name="articlesPublished" />

        <label htmlFor="sciPublished">SCI Published:</label>
        <input type="number" id="sciPublished" name="sciPublished" />

        <label htmlFor="scopusPublished">Scopus Published:</label>
        <input type="number" id="scopusPublished" name="scopusPublished" />

        <label htmlFor="wosPublished">WoS Published:</label>
        <input type="number" id="wosPublished" name="wosPublished" />

        <label htmlFor="ugcCarePublished">UGC Care Published:</label>
        <input type="number" id="ugcCarePublished" name="ugcCarePublished" />

        <label htmlFor="conferencesPresented">Conferences Presented:</label>
        <input type="number" id="conferencesPresented" name="conferencesPresented" />

        <label htmlFor="conferenceType">Type:</label>
        <input type="text" id="conferenceType" name="conferenceType" />

        <label htmlFor="conferenceDescription">Descriptions:</label>
        <textarea id="conferenceDescription" name="conferenceDescription"></textarea>

        <label htmlFor="file">Select a File:</label>
        <input type="file" id="file" name="file" />

        <button type="button" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ResearchScholar;
