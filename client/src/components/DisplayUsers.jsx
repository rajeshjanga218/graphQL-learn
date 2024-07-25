import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      username
      name
    }
  }
`;

function DisplayUsers() {
  const { error, loading, data } = useQuery(GET_ALL_USERS);
  console.log(data);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>DisplayUsers</h1>
      <ul className="">
        {data && data.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default DisplayUsers;
