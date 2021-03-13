import React from "react";
import { connect } from "react-redux";

const App = ({ posts }) => {
  return (
    <div>
      <h1>App</h1>
      <ul>
        { posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(App);
