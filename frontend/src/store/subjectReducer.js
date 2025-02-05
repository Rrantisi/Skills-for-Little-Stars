import axios from "axios";

// Set up the initial state
const initialState = {
  subjects: [],
  subjectDetails: {},
  error: null,
  loading: false,
};

// Define action types
export const SET_SUBJECTS = "SET_SUBJECTS";
export const SET_SUBJECT_DETAILS = "SET_SUBJECT_DETAILS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

// Create synchronous actions
export const setSubjects = (subjects) => {
  return {
    type: SET_SUBJECTS,
    subjects,
  };
};

export const setSubjectDetails = (subjectId, details) => {
  return {
    type: SET_SUBJECT_DETAILS,
    subjectId,
    details,
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
export const fetchSubjects = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get("/api/subjects");
    const subjects = response.data;
    dispatch(setSubjects(subjects));
  } catch (err) {
    dispatch(setError(err.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchSubjectDetails = (subjectId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`/api/subjects/${subjectId}`);
    const subjectDetails = response.data;
    dispatch(setSubjectDetails(subjectId, subjectDetails));
  } catch (err) {
    dispatch(setError(err.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Reducer to handle state updates
const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBJECTS:
      return {
        ...state,
        subjects: action.subjects,
      };
    case SET_SUBJECT_DETAILS:
      return {
        ...state,
        subjectDetails: {
          ...state.subjectDetails,
          [action.subjectId]: action.details,
        },
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

export default subjectReducer;
