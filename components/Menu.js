import React, { useEffect } from 'react'
import { Dimensions, FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { fetchPlatforms as fetchPlatformsActionCreator } from '../actions/platforms/fetchPlatforms'
import { resetProjects as resetProjectsActionCreator } from '../actions/projects/resetProjects'
import LoadingMenu from './utils/LoadingMenu'

const { height, width } = Dimensions.get('window')

const Container = styled.View`
  width: ${width}px;
  flex: 3;
  align-items: center;
  justify-content: center;
  background-color: #fffff0;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`

const List = styled(FlatList)`
  margin-top: 25px;
  padding-left: 52px;
  padding-top: 52px;
  width: 100%;
`

const Text = styled.Text`
  margin-top: 10px;
  font-size: 52px;
  font-weight: bold;
  color: #101010;
`

const Menu = ({ fetchPlatforms, resetProjects, loading, error, data }) => {
  useEffect(() => {
    fetchPlatforms()
  }, [])

  return (
    <Container>
      {loading ? <LoadingMenu /> : null}
      {error ? console.log(error) : null}
      {data ? (
        <List
          data={data}
          renderItem={({ item, index }) => (
            <Link
              to={`/${item.name}`}
              component={TouchableOpacity}
              activeOpacity={0.3}
              onPress={e => {
                resetProjects()
              }}>
              <Text>{item.name}</Text>
            </Link>
          )}
          keyExtractor={(item, index) => `platform${index}`}
        />
      ) : null}
    </Container>
  )
}

const mapStateToProps = state => ({
  loading: state.platforms.loading,
  error: state.platforms.error,
  data: state.platforms.data,
})

const mapDispatchToProps = dispatch => ({
  fetchPlatforms: () => dispatch(fetchPlatformsActionCreator()),
  resetProjects: () => dispatch(resetProjectsActionCreator()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
