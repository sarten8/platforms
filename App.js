import React, { Fragment } from 'react'
import {
  Dimensions,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import styled from 'styled-components/native'
import { Provider } from 'react-redux'
import { NativeRouter as Router, Route, Switch } from 'react-router-native'
import store from './store'
import Menu from './components/Menu'
import Home from './components/Home'
import Platform from './components/Platform'

const { width, height } = Dimensions.get('window')

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #232323;
`

const DismissKeyboard = ({ children }) => (
  <KeyboardAvoidingView behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Fragment>{children}</Fragment>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <DismissKeyboard>
          <View>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:platform" component={Platform} />
              <Route path="*" component={Home} />
            </Switch>
          </View>
        </DismissKeyboard>
      </Router>
    </Provider>
  )
}
