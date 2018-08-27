import React from 'react'
import { Box, Flex, Heading, Drawer, Overlay } from 'rebass'
import styled from 'styled-components'

import Projects from '../components/Projects'

const A = styled(Flex)`
  border-radius: 4px;
  height: 350px;
  background: #aaa;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const B = styled(Flex)`
  border-radius: 1px;
  width: 100%;
  height: 100%;
`

class Index extends React.Component {
  render() {
    return (
      <Box is="main" mt={3} pl={5}>
        <Flex justifyContent="center" alignItems="center">
          <Box width={1 / 2}>
            <Heading mb={4} fontSize={96}>
              Hi, i'm Mike
            </Heading>
            <A>
              <B id="portal" open={true} bg="black" />
            </A>
          </Box>
          <Projects />
        </Flex>
      </Box>
    )
  }
}

export default Index
