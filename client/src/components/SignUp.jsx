import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation createNewUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState(null);
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER);
  return (
    <div>
      <h1>SignUp User</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <p>name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <p>age</p>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <p>Nationality</p>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value.toUpperCase())}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            createUser({
              variables: {
                input: { name, username, age: parseInt(age), nationality },
              },
            });
          }}
        >
          submit
        </button>
      </form>
      {data && (
        <div>
          <p>new user has created just now</p>
          <p>{data.createUser.id}</p>
          <p>{data.createUser.name}</p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
