import React from 'react'
import styled from 'styled-components/native'

import Loading from './LoadingMenu.gif'

const Image = styled.Image.attrs({
  source: Loading,
})`
  width: 200px;
  height: 200px;
`

export default () => <Image />
