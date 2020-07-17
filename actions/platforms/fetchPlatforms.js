import axios from 'axios'
import {
  fetchPlatformsRequest,
  fetchPlatformsFailure,
  fetchPlatformsSuccess,
} from './'
import { API_KEY } from '@env'

const fetchPlatforms = () => async dispatch => {
  console.log()
  try {
    dispatch(fetchPlatformsRequest())
    const response = await axios.get(
      `https://libraries.io/api/platforms?api_key=${API_KEY}`
    )
    dispatch(fetchPlatformsSuccess(response.data))
  } catch (err) {
    dispatch(fetchPlatformsFailure(err.toString()))
  }
}

export { fetchPlatforms }
