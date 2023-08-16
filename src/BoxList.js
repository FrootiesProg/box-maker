import React, { useState } from "react";
import Box from "./Box"; // Import the Box component.
import NewBoxForm from "./NewBoxForm"; // Import the NewBoxForm component.

// This is a functional component named "BoxList".
function BoxList() {
  // State hook to manage the list of boxes.
  const [boxes, setBoxes] = useState([]);

  // Function to add a new box to the list.
  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]); // Add the new box to the existing list.
  };

  // Function to remove a box from the list based on its index.
  const removeBox = (index) => {
    setBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index)); // Remove the box at the specified index.
  };

  // Return JSX to render the BoxList component.
  return (
    <div>
      <h1>Color Box Maker</h1>
      {/* Render the NewBoxForm component and pass the addBox function as a prop. */}
      <NewBoxForm addBox={addBox} />
      <div>
        {/* Map through the list of boxes and render each Box component with its properties. */}
        {boxes.map((box, index) => (
          <Box
            key={index} // Assign a unique key to each rendered Box component.
            color={box.color} // Pass the color prop to the Box component.
            width={box.width} // Pass the width prop to the Box component.
            height={box.height} // Pass the height prop to the Box component.
            removeBox={() => removeBox(index)} // Pass the removeBox function as a prop to allow removing the box.
          />
        ))}
      </div>
    </div>
  );
}

// Export the BoxList component for use in other parts of the application.
export default BoxList;
