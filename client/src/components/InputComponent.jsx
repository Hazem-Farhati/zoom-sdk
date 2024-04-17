import React, { useState } from 'react';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  async function fetchGPTResponse(prompt) {
    const response = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return data;
  }

  const handleButtonClick = () => {
    fetchGPTResponse(inputValue);
    console.log(inputValue);
    setInputValue(''); // Here you can do whatever you want with the inputValue
    // For example, you could set another state, pass it up to a parent component, etc.
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Capture Input</button>
    </div>
  );
}

export default InputComponent;