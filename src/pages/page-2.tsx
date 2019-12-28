import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>You true shoe </h1>
    <Link to="/">
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
    </Link>
    <p>Welcome to page 2</p>
  </Layout>
)

export default SecondPage
