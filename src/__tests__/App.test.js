import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("it renders without crashing", () => {
  try {
    expect(() => render(<App />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to import the required components!");
  }
});
test("renders the correct child components", () => {
  const { container } = render( < App / > );
expect(container.querySelector("nav")).toBeInTheDocument();
    expect(container.querySelector("#home")).toBeInTheDocument();
    expect(container.querySelector("#about")).toBeInTheDocument();
});