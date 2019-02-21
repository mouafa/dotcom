import React from 'react'
import { styled } from 'linaria/react'
import Flex from '../styled/flex'

import { Subheading } from '@shopify/polaris'

const Bar = styled(Flex)`
  color: black;
  /* background-color: white; */
  padding: 20px;
`

export default function Footer() {
  return (
    <footer>
      <Bar align="center" justify="center">
        <Subheading>mouafa.com © {new Date().getFullYear()}</Subheading>
      </Bar>
    </footer>
  )
}
