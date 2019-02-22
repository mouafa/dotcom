import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Hero from '../components/home/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Welcome" keywords={[`blog`]} />
        <Hero />
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
