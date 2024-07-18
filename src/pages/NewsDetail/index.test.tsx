import React from "react";
import { screen } from "@testing-library/react";
import NewsDetail from ".";
import { RootState } from "../../store";
import { renderWithRedux } from "../../utils/TestUtils";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

describe("NewsDetail Component", () => {
  it("renders news detail correctly", () => {
    const mockState: RootState = {
      home: {
        data: [
          {
            id: 1,
            title: "Test Article",
            description: "Test Description",
            byline: "Test Author",
            image: "test.jpg",
            url: "http://example.com/test",
          },
        ],
      },
    };

    renderWithRedux(<NewsDetail />, mockState);

    // Assertions
    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "test.jpg");
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "http://example.com/test"
    );
  });

  it('renders "News not found" when news item is not found', () => {
    const mockState: RootState = {
      home: {
        data: [],
      },
    };

    renderWithRedux(<NewsDetail />, mockState);

    expect(screen.getByText("News not found")).toBeInTheDocument();
  });
});
