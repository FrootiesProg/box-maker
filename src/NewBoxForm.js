import React, { useState } from "react";

// This is a functional component named "NewBoxForm" that allows users to input box data and add a new box.
function NewBoxForm({ addBox }) {
  const initialState = { color: "", width: "", height: "" };
  const [formData, setFormData] = useState(initialState); // State to store form data.

  // Event handler to update form data as user types.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field (color, width, or height) in form data.
    }));
  };

  // Event handler for form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    addBox(formData); // Call the "addBox" function passed as a prop, passing in the form data.
    setFormData(initialState); // Reset the form data to initial state after adding a box.
  };

  // Return JSX to render the NewBoxForm component.
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for color */}
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      {/* Input field for width */}
      <label htmlFor="width">Width:</label>
      <input
        type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      {/* Input field for height */}
      <label htmlFor="height">Height:</label>
      <input
        type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      {/* Button to submit the form */}
      <button>Add Box</button>
    </form>
  );
}

// Export the NewBoxForm component for use in other parts of the application.
export default NewBoxForm;
