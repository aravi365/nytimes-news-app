import React from "react";
import { screen } from "@testing-library/react";
import Home from ".";
import { RootState } from "../../store";
import { renderWithRedux } from "../../utils/TestUtils"; // Assuming you have a custom render function

jest.mock("../../store/actions/homeActions", () => ({
  fetchNewsHome: jest.fn(),
}));

describe("Home Component", () => {
  const initialState: RootState = {
    home: {
      data: [],
      loading: false,
      error: null,
    },
  };

  it("renders loading state", () => {
    renderWithRedux(<Home />, {
      home: { ...initialState.home, loading: true },
    });

    expect(screen.getByText("Loading Most Popular news")).toBeInTheDocument();
  });

  // it("renders articles", () => {
  //   const mockState: RootState = {
  //     home: {
  //       data: [
  //         {
  //           id: 1,
  //           title: "Test Article",
  //           description: "Test Description",
  //           thumbnail: "test.jpg",
  //           image: "test.jpg",
  //           byline: "Test Author",
  //           abstract: "Test Abstract",
  //           url: "http://example.com/test",
  //         },
  //       ],
  //       loading: false,
  //       error: null,
  //     },
  //   };

  //   renderWithRedux(<Home />, mockState);

  //   expect(screen.getByText("Test Article")).toBeInTheDocument();
  //   expect(screen.getByText("Test Description")).toBeInTheDocument();
  //   // Add more assertions for other fields as needed
  // });

  // it("dispatches fetchNewsHome action on mount", () => {
  //   renderWithRedux(<Home />, initialState);

  //   expect(fetchNewsHome).toHaveBeenCalledTimes(1);
  // });
});
