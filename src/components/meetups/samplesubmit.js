import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    // Initialize your form data state
    // Example: name: '', email: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your custom form submission logic goes here
    // For example, sending a POST request with fetch

    try {
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();
      console.log('Server Response:', responseData);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleInputChange = (event) => {
    // Update the form data state as the user types
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <label>
        Name:
        <input type="text" name="name" onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
