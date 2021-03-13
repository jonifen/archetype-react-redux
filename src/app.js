import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <h1>App</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_POST",
            payload: { id: posts.length + 1, title: "New post" },
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default App;
