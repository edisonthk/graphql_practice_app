import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import FormControl from "components/FormControl"
import { gql } from '@apollo/client'
import client from "client";

const updateUserQuery = gql`
  mutation UpdateUser($name: String!) {
    updateUser(input: {
      id: 1,
      name: $name,
      investment_experience: "",
      income: "",
    }) {
      id
      name
      investment_experience
      income
    }
  }
`;

const onSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  client.mutate({
    mutation: updateUserQuery,
    variables: {
      name: formData.get('name'),
    },
  }).then(res => {
    navigate("/page-2")
  });
};

export const pageQuery = graphql`
  query {
    golangData {
      getUserByID(userId: 1) {
        id
        name
        investment_experience
        income
      }
    }
  }
`

const Page1 = ({data}) => {

  return (
    <Layout>
      <SEO title="会員登録 - ページ１" />
      <h1>情報入力</h1>

      <form onSubmit={(event) => onSubmit(event)}>
        <FormControl 
          label="名前"
          name="name"
          defaultValue={data.golangData.getUserByID.name} />

        <button type="submit">送信</button>
      </form>

    </Layout>
  );
}

export default Page1
