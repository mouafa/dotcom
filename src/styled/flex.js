import { styled } from 'linaria/react'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex-direction: ${props => (props.column ? 'column' : 'row')};
  flex-grow: ${props => (props.grow ? 1 : 0)};

  align-items: ${props => props.align || 'start'};
  justify-content: ${props => props.justify || 'start'};
`

// align-items: flex-start
// align-items: flex-end
// align-items: center
// align-items: baseline
// align-items: stretch

// justify-content: center
// justify-content: flex-end
// justify-content: space-around
// justify-content: space-between
// justify-content: space-around // not cross browser supported

export default Flex
