import React from 'react'
import { graphql } from 'gatsby'
import { styled } from 'linaria/react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Flex from '../styled/flex'

const Title = styled.h1`
  display: inline-block;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  margin-right: 20px;
  padding: 10px 23px 10px 0;
  font-size: 24px;
  font-weight: 700;
`

const Position = styled.h3`
  font-size: 14px;
  font-weight: 500;
`

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <Flex align="center" justify="center" grow>
          <Title>404</Title>
          <Position>Not Found</Position>
        </Flex>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
