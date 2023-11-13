// src/PublicationForm.js

import React, { useState } from 'react'
import "../Styles/PublicationForm.css"

const PublicationForm = () => {
    const [formData, setFormData] = useState({
        articleName: '',
        volumeNumber: '',
        issueNumber: '',
        authors: '',
        date: '',
        cutmAffiliation: 'yes',
        status: 'draft',
        description: '',
        file: null,
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const submitForm = () => {
        alert(
            `Form submitted!\nArticle Name: ${formData.articleName}\nVolume Number: ${formData.volumeNumber}\nIssue Number: ${formData.issueNumber}\nAuthors: ${formData.authors}\nDate: ${formData.date}\nWith CUTM Affiliation: ${formData.cutmAffiliation}\nStatus: ${formData.status}\nDescription: ${formData.description}\nFile: ${formData.file ? formData.file.name : 'No file selected'}`
        );
    };

    return (
        <div className="publication-container">
            <h1>Publication Information</h1>
            <form encType="multipart/form-data">
                <label htmlFor="articleName">Article Name:</label>
                <input
                    type="text"
                    id="articleName"
                    value={formData.articleName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="volumeNumber">Volume Number:</label>
                <input
                    type="text"
                    id="volumeNumber"
                    value={formData.volumeNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="issueNumber">Issue Number:</label>
                <input
                    type="text"
                    id="issueNumber"
                    value={formData.issueNumber}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="authors">Authors:</label>
                <input
                    type="text"
                    id="authors"
                    value={formData.authors}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="cutmAffiliation">With CUTM Affiliation?</label>
                <select
                    id="cutmAffiliation"
                    value={formData.cutmAffiliation}
                    onChange={handleChange}
                    required
                >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>

                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="pending">Pending</option>
                </select>

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>

                <label htmlFor="file">Upload PDF:</label>
                <input
                    type="file"
                    id="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    required
                />

                <button type="button" onClick={submitForm}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PublicationForm;
