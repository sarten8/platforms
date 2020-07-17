const defaultState = {
  loading: false,
  error: '',
  data: null,
}

const projects = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_PROJECTS_FAILURE':
      return { ...state, error: action.payload, loading: false, data: null }
    case 'FETCH_PROJECTS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: null }
    case 'RESET_PROJECTS_REQUEST':
      return { ...state, loading: true }
    case 'RESET_PROJECTS_FAILURE':
      return { ...state, error: action.payload, loading: false, data: null }
    case 'RESET_PROJECTS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: null }
    default:
      return state
  }
}

export default projects
