import React, { useState } from "react";
import "../styles/PromptSpace.css";
    
const PromptSpace = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
  };

  return (
    <div>
      <input
        className="prompt-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something here..."
      />
      <button className="prompt-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default PromptSpace;
