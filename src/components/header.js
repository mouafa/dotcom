import React from 'react'
import { styled } from 'linaria/react'
import Flex from '../styled/flex'
import { Subheading } from '@shopify/polaris'

const Bar = styled(Flex)`
  color: black;
  /* background-color: white; */

  padding: 0 20px;
  width: 100%;
  height: 60px;
  /* box-shadow: 5px 0 10px 1px rgba(63, 63, 68, 0.05); */
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 10px;
`

export default function Header() {
  return (
    <header>
      <Bar align="center" justify="flex-end">
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
      </Bar>
    </header>
  )
}
