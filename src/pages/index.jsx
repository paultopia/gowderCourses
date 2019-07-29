import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>OK FINE MAYBE GATSBY IS COOL</h1>
        <Link to="/mdtest/">and can handle jupyter notebooks and stuff</Link>
  </Layout>
)

export default IndexPage
