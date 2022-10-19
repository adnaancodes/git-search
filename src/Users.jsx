import React from "react";

const Users = ({ users }) => {
  return (
    <div className="user">
      <h1>User's Profile</h1>
      {users.map(
        ({
          avatar_url,
          login,
          repos_url,
          followers_url,
          following_url,
          id,
        }) => (
          <div key={id} className="profile">
            <img src={avatar_url} alt="user" />
            <p>{login} </p>
            <a href={repos_url} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
            <a href={followers_url} target="_blank" rel="noopener noreferrer">
              Followers
            </a>
            <a href={following_url} target="_blank" rel="noopener noreferrer">
              Following
            </a>
          </div>
        )
      )}
    </div>
  );
};

export default Users;
