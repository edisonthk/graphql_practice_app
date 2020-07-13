import React from "react"
import { useMutation } from "@apollo/react-hooks";
import { CreateUserDocument, AllUsersDocument } from "graph/generated/graphql";

const UserCreateForm = () => {
  let input;
  const [ createUser ] = useMutation(
    CreateUserDocument,
    {
      update(cache, { data: { createUser } }) {
        const { allUsers } = cache.readQuery({ query: AllUsersDocument });
        cache.writeQuery({
          query: AllUsersDocument,
          data: { allUsers: allUsers.concat([createUser]) },
        });
      }
    }
  )

  return (
    <>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createUser({ variables: { name: input.value } });
            input.value = '';
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </>
  )
}

export default UserCreateForm
