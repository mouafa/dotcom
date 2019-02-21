import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { styled } from 'linaria/react'
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

export default function Hero() {
  return (
    <Flex align="center" justify="center" grow>
      <Title>Mouafa Ahmed</Title>
      <Position>Technical Team Lead</Position>
    </Flex>
  )
}
