import React, { Component } from 'react'
import { Image } from 'react-native'
import loading from './loadingGif7.gif'

export default () => (
  <Image
    style={{
      padding: 10,
      margin: 15,
      height: 200,
      width: 200,
      //objectFit: 'cover',
    }}
    source={loading}
  />
)
