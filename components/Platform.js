import React, { useState, useEffect } from 'react'
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { useParams } from 'react-router-native'
import styled from 'styled-components/native'
import { fetchProjects as fetchProjectsActionCreator } from '../actions/projects/fetchProjects'
import { connect } from 'react-redux'
import Header from './Header'
import Loading from './utils/Loading'
import Card from './Card'

const { width } = Dimensions.get('window')

const Container = styled.View`
  width: ${width}px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101010;
`

const ContainerSearch = styled.View`
  margin-bottom: 22px;
  width: 100%;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TitleSearch = styled.Text`
  margin-bottom: 10px;
  color: #fffff0;
  font-size: 48px;
  font-weight: bold;
`

const InputSearch = styled.TextInput`
  margin-bottom: 36px;
  width: 90%;
  height: 48px;
  color: #fffff0;
  font-size: 24px;
  font-weight: 100;
  border-bottom-width: 1px;
  border-color: #fffff033;
`

const ButtonSearch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 80px;
  background-color: #fffff0;
  border-top-left-radius: 15px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 15px;
  font-size: 30px;
  font-weight: 100;
  border-width: 0;
`

const ButtonText = styled.Text`
  font-size: 16px;
  color: #101010;
`

const ContainerResults = styled.View`
  width: 100%;
  flex: 3;
  padding: 10px;
  align-items: center;
  justify-content: center;
`

const Platform = ({
  fetchProjects,
  updateSearchResults,
  loading,
  error,
  data,
}) => {
  const [input, setInput] = useState('')

  const params = useParams()

  return (
    <Container>
      <Header />
      <ContainerSearch>
        <TitleSearch>{params.platform}</TitleSearch>
        <InputSearch
          placeholder="Project..."
          placeholderTextColor="#fffff0"
          onChangeText={value => setInput(value)}
          value={input}
        />
        <ButtonSearch
          onPress={() => {
            Keyboard.dismiss()
            fetchProjects(input)
          }}
          disabled={loading ? true : false}>
          <ButtonText> S E A R C H </ButtonText>
        </ButtonSearch>
      </ContainerSearch>
      <ContainerResults>
        {loading ? <Loading /> : null}
        {error ? console.log(error) : null}
        {data ? (
          <FlatList
            horizontal
            scrollEventThrottle={10}
            pagingEnabled
            // ItemSeparatorComponent={() => <View style={{ width: 1 }} />}
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
            contentContainerStyle={{
              alignItems: 'center',
              alignSelf: 'center',
            }}
            data={data}
            renderItem={function ({ item, index }) {
              return (
                <Card
                  name={item.name}
                  rank={item.rank}
                  stars={item.stars}
                  description={item.description}
                  normalized_licenses={item.normalized_licenses[0]}
                  forks={item.forks}
                />
              )
            }}
            keyExtractor={(item, index) => `project${index}`}
          />
        ) : null}
      </ContainerResults>
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.projects.loading,
  error: state.projects.error,
  data: state.projects.data,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const params = useParams()

  return {
    fetchProjects: project =>
      dispatch(
        fetchProjectsActionCreator({
          platform: params.platform,
          project,
        })
      ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform)
