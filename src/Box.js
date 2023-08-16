import React from "react";

// This is a functional component named "Box" that takes in props: color, width, height, and removeBox.
function Box({ color, width, height, removeBox }) {
  // Create an inline style object for the box, setting background color, width, height, display, margin, and border.
  const boxStyle = {
    backgroundColor: color, // Set the background color of the box.
    width: `${width}px`, // Set the width of the box using the 'width' prop.
    height: `${height}px`, // Set the height of the box using the 'height' prop.
    display: "inline-block", // Display the box as an inline-block element.
    margin: "10px", // Apply a margin around the box.
    border: "1px solid black", // Set a black border with a width of 1px around the box.
  };

  // Return JSX to render the box element with the calculated style.
  return (
    <div style={boxStyle}>
      {/* Create a button inside the box with an "X" label, and attach the "removeBox" event handler. */}
      <button onClick={removeBox}>X</button>
    </div>
  );
}

// Export the Box component so it can be used in other parts of the application.
export default Box;
