import { reducer } from "../../src/store/reducer";

describe("store.reducer tests", () => {
  it("when ADD_POST action dispatched, should add post to state", () => {
    let defaultState = {
      posts: [],
    };
    const testAction = {
      type: "ADD_POST",
      payload: { id: 1, title: "This is a test" },
    };

    const updatedState = reducer(defaultState, testAction);

    expect(updatedState.posts[0].title).toBe("This is a test");
  });

  it("when UNKNOWN action dispatched, should return existing state", () => {
    let defaultState = {
      posts: []
    };
    const testAction = {
      type: "UNKNOWN",
      payload: "Wibble"
    };

    const updatedState = reducer(defaultState, testAction);

    expect(updatedState).toStrictEqual(defaultState);
  });
});
