import React from 'react'
import { Dimensions, StyleSheet, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default ({ name, rank, stars, description, normalized_licenses }) => (
  <LinearGradient
    colors={['#121212', '#121212', '#202020', '#303030']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <ScrollView>
      <Text style={{ ...styles.text, marginBottom: 25 }}>{description}</Text>
      <Text style={{ ...styles.text, marginBottom: 8 }}>
        {normalized_licenses}
      </Text>
      <Text style={{ ...styles.text }}>
        &#x1F4CC;{`  ${rank}`} {` |  `}&#11088;{` ${stars}`}
      </Text>
    </ScrollView>
  </LinearGradient>
)

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    height: 220,
    margin: 20,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  title: {
    paddingTop: 10,
    paddingLeft: 10,
    marginBottom: 25,
    color: '#fffff0',
    fontWeight: 'bold',
    fontSize: 27,
  },
  text: {
    paddingLeft: 10,
    color: '#fffff0',
    fontWeight: '100',
    fontSize: 17,
  },
})
