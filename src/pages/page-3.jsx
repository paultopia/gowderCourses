import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
    <Layout>
        <SEO title="Page third" />
        <h1>Hi from the third page (of {data.site.siteMetadata.title})</h1>
        <p>Welcome to page 3</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default ThirdPage
