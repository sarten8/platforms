const defaultState = {
  loading: false,
  error: '',
  data: null,
}

const projectDetails = (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTDETAILS_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_PROJECTDETAILS_FAILURE':
      return { ...state, error: action.payload, loading: false, data: null }
    case 'FETCH_PROJECTDETAILS_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: null }
    default:
      return state
  }
}

export default projectDetails
