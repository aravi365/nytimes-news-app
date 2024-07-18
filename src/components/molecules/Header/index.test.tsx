import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("Header Component", () => {
  it("renders with title and menu icon", () => {
    const title = "News App";

    render(
      <Router>
        <Header title={title} />
      </Router>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByLabelText("menu")).toBeInTheDocument();
  });

  it("navigates to home page on clicking the title link", () => {
    const title = "News App";
    render(
      <Router>
        <Header title={title} />
      </Router>
    );

    const titleLink = screen.getByText(title);
    expect(titleLink).toBeInTheDocument();

    titleLink.click();

    expect(window.location.pathname).toBe("/");
  });
});
