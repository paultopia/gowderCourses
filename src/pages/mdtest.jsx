import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
    <Layout>
        <SEO title="Page third" />

        <p>Here's some markdown maybe: </p>

        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    html
                    
                }
            }
        }
    }

`

export default ThirdPage
