import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MarkdownAndNotebookPage = ({ data }) => (
    <Layout>
        <SEO title="wacky page" />

        <p>Here's some markdown maybe: </p>

        <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />

        <h2>Here's a whole jupyter notebook!!!</h2>

        <div dangerouslySetInnerHTML={{ __html: data.allJupyterNotebook.edges[0].node.html }} />

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
        
        allJupyterNotebook {
            edges {
                node {
                    html
                }
            }
        }
    }


`

export default MarkdownAndNotebookPage
