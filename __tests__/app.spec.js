import React from "react";
import { render } from "@testing-library/react";
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
});
