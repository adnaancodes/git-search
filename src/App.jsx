import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import Users from "./Users";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchUser = e.target.user.value;
    console.log(searchUser);
    try {
      const { data } = await axios(
        `https://api.github.com/search/users?q=${searchUser}`
      );
      setUsers(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home handleSubmit={handleSubmit} users={users} />}
        />
        <Route path="Users" element={<Users users={users} />} />
      </Routes>
      <Link to="Users">{/* <button>users</button>{" "} */}</Link>
    </div>
  );
}

export default App;
