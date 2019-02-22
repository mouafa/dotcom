import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { styled } from 'linaria/react'
import { css } from 'linaria'

import Flex from '../../styled/flex'

const Title = styled.h1`
  display: inline-block;
  font-size: 48px;
  line-height: 60px;
  font-weight: 700;
`

const Position = styled.h3`
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
`

const Image = styled(Img)`
  border-radius: 50%;
  margin: 50px;
`

const space = css`
  margin: 0 20px;
`

function Head() {
  return (
    <Flex align="center" justify="center" column class={space}>
      <Title>I'm Mouafa</Title>
      <Position>Technical Team Lead based in Berlin</Position>
    </Flex>
  )
}

function Picture(data) {
  return <Image fixed={data.avatar.childImageSharp.fixed} />
}

export default function Hero() {
  return (
    <Flex align="center" justify="center" grow>
      <Flex align="center" justify="center">
        <StaticQuery query={imageQuery} render={Picture} />
        <Head />
      </Flex>
    </Flex>
  )
}

const imageQuery = graphql`
  query imageQuery {
    avatar: file(absolutePath: { regex: "/me.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
