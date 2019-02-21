import React from 'react'
import { styled } from 'linaria/react'
import Flex from '../styled/flex'

const Bar = styled(Flex)`
  color: black;
  background-color: white;

  padding: 0 20px;
  width: 100%;
  height: 60px;
  box-shadow: 5px 0 10px 1px rgba(63, 63, 68, 0.05);
`

export default function Header() {
  return (
    <header>
      <Bar align="center" justify="space-between">
        <Flex>Home</Flex>
        <Flex>x</Flex>
      </Bar>
    </header>
  )
}
