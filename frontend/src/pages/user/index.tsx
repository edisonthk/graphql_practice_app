import * as React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import Users from "components/user/Users"
import UserCreateForm from "components/user/UserCreateForm"

const UserIndexPage: React.FC = () => (
  <Layout>
    <SEO title="User's list" />
      <Users></Users>
      <UserCreateForm></UserCreateForm>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UserIndexPage
