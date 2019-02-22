import React from 'react'
import { styled } from 'linaria/react'

import Header from './header'
import Footer from './footer'
import Main from './main'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: auto;
  min-height: 100vh;
  max-width: 1200px;
  width: 100%;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <Wrapper>
        {/* <Header /> */}
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
