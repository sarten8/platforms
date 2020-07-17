import React from 'react'
import styled from 'styled-components/native'
import { Link, useHistory } from 'react-router-native'

const Container = styled.View`
  padding-top: 22px;
  padding-left: 22px;
  padding-right: 22px;
  width: 100%;
  height: 80px;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #101010;
`

const Text = styled.Text`
  color: #fffff0;
  font-size: 54px;
  font-weight: bold;
`

const ButtonBack = styled.TouchableOpacity``

export default () => {
  const history = useHistory()

  return (
    <Container>
      <ButtonBack onPress={() => history.goBack()}>
        <Text>&#xab;</Text>
      </ButtonBack>
    </Container>
  )
}
