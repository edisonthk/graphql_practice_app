import React from "react"
import { useAllUsersQuery } from "graph/generated/graphql";

const Users = () => {
  const { loading, error, data } = useAllUsersQuery();
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <p>User's list</p>
      <ul>
        {data.allUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Users
