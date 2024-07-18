import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from ".";

describe("Loader Component", () => {
  it("renders CircularProgress with correct size and color", () => {
    render(<Loader />);

    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toHaveStyle("color: #333");
  });

  it("displays loaderText correctly", () => {
    const loaderText = "Loading...";
    render(<Loader loaderText={loaderText} />);

    const textElement = screen.getByText(loaderText);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(loaderText);
  });
});
