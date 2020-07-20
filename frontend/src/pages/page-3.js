import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

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

      <table>
        <tbody>
          <tr><td>名前</td><td>{data.golangData.getUserByID.name}</td></tr>
          <tr><td>投資経験</td><td>{data.golangData.getUserByID.investment_experience}</td></tr>
          <tr><td>収入</td><td>{data.golangData.getUserByID.income}</td></tr>
        </tbody>
      </table>
      
      <Link to="/">完了しました</Link> <br />

    </Layout>
  );
}

export default Page2
