import React from "react"
import { graphql, navigate } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import FormControl from "components/FormControl"
import { gql } from '@apollo/client'
import client from "client";

const updateUserQuery = gql`
  mutation UpdateUser($name: String!,$investment_experience: String!, $income: String!) {
    updateUser(input: {
      id: 1,
      name: $name,
      investment_experience: $investment_experience,
      income: $income,
    }) {
      id
      name
      investment_experience
      income
    }
  }
`;

const onSubmit = (event) => {
  const formData = new FormData(event.target);
  
  event.preventDefault();

  client.mutate({
    mutation: updateUserQuery,
    variables: {
      name: formData.get('name'),
      investment_experience: formData.get('investment_experience'),
      income: formData.get('income'),
    },
  }).then(res => {
    navigate("/page-3")
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


const Page2 = ({data}) => {

  return (
    <Layout>
      <SEO title="会員登録 - ページ２" />
      <h1>適合性確認</h1>
      <form onSubmit={(event) => onSubmit(event)}>
        <input type="hidden" name="name" value={data.golangData.getUserByID.name} />
        <FormControl 
          label="投資経験"
          name="investment_experience"
          defaultValue={data.golangData.getUserByID.investment_experience} />

        <FormControl 
          label="収入"
          name="income"
          defaultValue={data.golangData.getUserByID.income} />

        <button type="submit">送信</button>
      </form>

    </Layout>
  );
}

export default Page2
