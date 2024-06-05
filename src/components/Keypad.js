import React, { useState } from 'react';

function Keypad() {
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
    console.log('Entering password...');
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Enter password"
      />
    </div>
  );
}

export default Keypad;