import React from "react"
import { graphql, navigate, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
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
      <SEO title="会員登録 - ページ３" />
      <h1>入力情報確認</h1>

      <form onSubmit={(event) => onSubmit(event)}>
        <table>
          <tbody>
            <tr><td>名前</td><td>{data.golangData.getUserByID.name}</td></tr>
            <tr><td>投資経験</td><td>{data.golangData.getUserByID.investment_experience}</td></tr>
            <tr><td>収入</td><td>{data.golangData.getUserByID.income}</td></tr>
          </tbody>
        </table>
        
        <Link to="/">完了しました</Link> <br />
      </form>

    </Layout>
  );
}

export default Page2
