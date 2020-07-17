import axios from 'axios'
import {
  resetProjectsRequest,
  resetProjectsFailure,
  resetProjectsSuccess,
} from '.'

const resetProjects = () => async dispatch => {
  try {
    dispatch(resetProjectsRequest())
    dispatch(resetProjectsSuccess())
  } catch (err) {
    dispatch(resetProjectsFailure(err.toString()))
  }
}

export { resetProjects }
