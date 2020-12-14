import React from "react";
import FetchUsers from "pages/FetchUsers";
import "./App.css";

const App = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>userID</th>
            <th>email</th>
            <th>username</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          <FetchUsers />
        </tbody>
      </table>
    </div>
  );
};

export default App;
