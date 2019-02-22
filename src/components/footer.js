import React from 'react'
import { styled } from 'linaria/react'
import Flex from '../styled/flex'

import { Subheading } from '@shopify/polaris'

const Bar = styled(Flex)`
  color: black;
  /* background-color: white; */
  padding: 20px;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  padding: 10px;
  &:hover {
    text-decoration: underline;
  }
`

export default function Footer() {
  return (
    <footer>
      <Bar align="center" justify="start">
        <Link href="https://www.linkedin.com/in/mouafa/" target="_blank">
          <Subheading>linkedin</Subheading>
        </Link>
        <Link href="https://dribbble.com/mouafa" target="_blank">
          <Subheading>dribbble</Subheading>
        </Link>
        <Link href="https://www.behance.net/mouafa" target="_blank">
          <Subheading>behance</Subheading>
        </Link>
        <Link href="https://twitter.com/mouafa" target="_blank">
          <Subheading>twitter</Subheading>
        </Link>
        <Link href="https://github.com/mouafa" target="_blank">
          <Subheading>github</Subheading>
        </Link>
        <Link href="https://medium.com/@mouafa" target="_blank">
          <Subheading>medium</Subheading>
        </Link>

        <Flex grow />

        <Link href="/">
          <Subheading>mouafa.com © {new Date().getFullYear()}</Subheading>
        </Link>
      </Bar>
    </footer>
  )
}
