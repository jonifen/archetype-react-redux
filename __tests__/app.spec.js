import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "../src/app";
import { Provider } from "react-redux";
import { createStore } from "redux";

describe("<App />", () => {
  it("should render without crashing", () => {
    const initialState = {
      posts: []
    };

    const testReducer = (state = initialState, action) => {
      return state;
    };

    const store = createStore(testReducer);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should add post when button clicked", () => {
    const initialState = {
      posts: []
    };

    const testReducerActionFunc = jest.fn();

    const testReducer = (state = initialState, action) => {
      testReducerActionFunc(action);
      return state;
    };

    const store = createStore(testReducer);

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const addButton = getByText("Add");
    fireEvent.click(addButton);

    expect(testReducerActionFunc).toHaveBeenCalledWith({
      type: "ADD_POST",
      payload: { id: 1, title: "New post" },
    });
  });
});
