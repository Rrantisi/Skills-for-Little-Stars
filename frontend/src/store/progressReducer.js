import axios from "axios";

// Set up the initial state
const initialState = {
  progress: [],
  error: null,
  loading: false,
};

// Define action types
export const SET_PROGRESS = "SET_PROGRESS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

// Create synchronous actions
export const setProgress = (userId, progress) => {
  return {
    type: SET_PROGRESS,
    userId,
    progress,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};

// Create asynchronous actions (thunk)
export const fetchProgress = (userId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`/api/progress/${userId}`);
    const progressDetails = response.data;
    dispatch(setProgress(userId, progressDetails));
  } catch (err) {
    dispatch(setError(err.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Reducer to handle state updates
const progressReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default progressReducer;
