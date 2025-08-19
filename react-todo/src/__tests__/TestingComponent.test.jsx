// src/components/__tests__/TestingComponent.test.jsx
import { render, screen } from "@testing-library/react";
import TestingComponent from "../TestingComponent";

test("renders TestingComponent correctly", () => {
  render(<TestingComponent />);
  expect(screen.getByText("Testing Component")).toBeInTheDocument();
});
