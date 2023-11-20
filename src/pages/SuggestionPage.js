import React from "react";
import { useState } from "react";
import "../Styles/SuggestionPage.css"

function SuggestionPage(){
    const [suggestions, setSuggestions] = useState(['']);
  const [, setEditingIndex] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleAddSuggestion = () => {
    setSuggestions([...suggestions, '']);
  };

  const handleEditSuggestion = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteSuggestion = (index) => {
    const updatedSuggestions = [...suggestions];
    updatedSuggestions.splice(index, 1);
    setSuggestions(updatedSuggestions);
  };

  const handleSuggestionChange = (index, value) => {
    const updatedSuggestions = [...suggestions];
    updatedSuggestions[index] = value;
    setSuggestions(updatedSuggestions);
  };

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return(
    <div className="App">
      <h1>Share Your Ideas</h1>

      {/* Suggestion Form */}
      <div>
        {suggestions.map((suggestion, index) => (
          <div key={index} className="suggestion-box">
            <h3>Idea {index + 1}</h3>
            <input
              type="text"
              placeholder="Share your idea"
              value={suggestion}
              onChange={(e) => handleSuggestionChange(index, e.target.value)}
            />
            <button onClick={() => handleEditSuggestion(index)}>Edit</button>
            <button className="delete-button" onClick={() => handleDeleteSuggestion(index)}>Delete</button>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={handleAddSuggestion} className="add-button">
            Add
          </button>
          <button onClick={handleButtonClick} className="save-button">
            Submit
          </button>
        </div>
      </div>

      {/* Display Thank You message conditionally */}
      {buttonClicked && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Thank You!</h2>
          <p>Your ideas have been received.</p>
        </div>
      )}
    </div>
  );
}

export default SuggestionPage;