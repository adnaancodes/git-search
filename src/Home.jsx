import React from "react";
import { Link } from "react-router-dom";

const Home = ({ handleSubmit, users }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Git Search</h1>
        <input type="text" name="user" />
      </form>

      {users.map(({ login }, i) => (
        <ul key={i}>
          <Link to="Users">{login}</Link>
        </ul>
      ))}
    </div>
  );
};

export default Home;
