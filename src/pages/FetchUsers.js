import React, { useEffect } from "react";
import { useState } from "react";
import fetchUsers from "./services/fetchUsers";

const FetchUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJndW5uZXJAZ21haWwuY29tIiwiaWF0IjoxNjA3OTUwMjY2fQ.DIBNSCEaWynnF2IW6gACxUM7fOWNyIY5AJuj8DGtxx4";

  //fetch users
  useEffect(() => {
    fetchUsers(
      `https://cors-anywhere.herokuapp.com/https://phantom-backend.herokuapp.com/api/users`,
      token
    )
      .then((res) => {
        setFetchedUsers(res);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  if (isLoading) {
    return "Loading...";
  } else {
    return fetchedUsers.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.email}</td>
        <td>{user.username}</td>
        <td>{user.role}</td>
      </tr>
    ));
  }
};

export default FetchUsers;
