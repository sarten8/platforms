import axios from 'axios'
import {
  fetchProjectDetailsRequest,
  fetchProjectDetailsFailure,
  fetchProjectDetailsSuccess,
} from '.'
import { API_KEY } from '@env'

const fetchProjectDetails = (platform, project) => async dispatch => {
  try {
    dispatch(fetchProjectDetailsRequest())
    const response = await axios.get(
      `https://libraries.io/api/${platform}/${project}?api_key=${API_KEY}`
    )
    dispatch(fetchProjectDetailsSuccess(response.data))
  } catch (err) {
    dispatch(fetchProjectDetailsFailure(err.toString()))
  }
}

export { fetchProjectDetails }
