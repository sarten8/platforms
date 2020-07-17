import React from 'react'
import styled from 'styled-components/native'

import Menu from './Menu'

const Container = styled.View`
  flex: 1;
`

const Description = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 22px;
`

const Text = styled.Text`
  color: #101010;
  font-size: 24px;
  font-weight: bold;
`

export default () => (
  <Container>
    <Menu />
    <Description>
      <Text>DEVELOPMENT</Text>
      <Text>CODE #</Text>
      <Text>PACKAGE</Text>
      <Text>SOURCE</Text>
      <Text>TOOLS</Text>
      <Text>PLUS ++</Text>
    </Description>
  </Container>
)
