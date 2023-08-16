import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Test to ensure that the NewBoxForm component renders correctly and its elements are present.
test("renders NewBoxForm component", () => {
  // Render the NewBoxForm component and capture a snapshot of the rendered component.
  const { asFragment } = render(<NewBoxForm />);

  // Find form elements in the rendered component.
  const colorInput = screen.getByLabelText("Color:");
  const widthInput = screen.getByLabelText("Width:");
  const heightInput = screen.getByLabelText("Height:");
  const addButton = screen.getByText("Add Box");

  // Expect form elements to be present in the DOM.
  expect(colorInput).toBeInTheDocument();
  expect(widthInput).toBeInTheDocument();
  expect(heightInput).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();

  // Capture a snapshot of the rendered component for future reference.
  expect(asFragment()).toMatchSnapshot();
});

// Test to simulate form submission and verify that a new box is added.
test("submitting form adds a new box", () => {
  // Create a mock function to simulate the "addBox" function.
  const addBoxMock = jest.fn();

  // Render the NewBoxForm component with the mock function.
  const { asFragment } = render(<NewBoxForm addBox={addBoxMock} />);

  // Find form elements in the rendered component.
  const colorInput = screen.getByLabelText("Color:");
  const widthInput = screen.getByLabelText("Width:");
  const heightInput = screen.getByLabelText("Height:");
  const addButton = screen.getByText("Add Box");

  // Simulate user input by firing change events on input fields.
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });

  // Simulate form submission by clicking the "Add Box" button.
  fireEvent.click(addButton);

  // Expect the mock function to have been called with the specified arguments.
  expect(addBoxMock).toHaveBeenCalledWith({
    color: "blue",
    width: "100",
    height: "100",
  });

  // Capture a snapshot of the rendered component after form submission.
  expect(asFragment()).toMatchSnapshot();
});
