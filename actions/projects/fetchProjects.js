import axios from 'axios'
import {
  fetchProjectsRequest,
  fetchProjectsFailure,
  fetchProjectsSuccess,
} from '.'
import { API_KEY } from '@env'

const fetchProjects = ({ platform, project }) => async dispatch => {
  try {
    dispatch(fetchProjectsRequest())
    const response = await axios.get(`https://libraries.io/api/search`, {
      params: {
        api_key: API_KEY,
        platforms: platform,
        q: project,
      },
    })
    dispatch(fetchProjectsSuccess(response.data))
  } catch (err) {
    dispatch(fetchProjectsFailure(err.toString()))
  }
}

export { fetchProjects }
