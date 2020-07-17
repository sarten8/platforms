import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { Link } from 'react-router-native'

export default ({ updateHeight }) => (
  <View style={styles.container}>
    <Link
      to="/"
      component={TouchableOpacity}
      activeOpacity={0.3}
      onPress={e => updateHeight(4)}
    >
    </Link>
  </View>
)

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 3,
    top: 40,
    left: 18,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 30,
  },
})
