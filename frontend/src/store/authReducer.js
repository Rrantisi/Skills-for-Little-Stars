import axios from "axios";

// Set up the initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
  loading: false,
};

// Define action types
export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const LOGOUT = "LOGOUT";

// Create synchronous actions
export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SET_USER,
    user,
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

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

// Create asynchronous actions (thunk)

// login function
export const loginUser = (credentials, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post("/api/session", credentials);

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    // const user = JSON.parse(atob(token.split(".")[1])).user;
    dispatch(setUser(user));
    navigate("/");
  } catch (err) {
    dispatch(setError(err.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// logOutUser function
export const logOutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logOut());
};

// signUpUser function
export const signUpUser = (credentials, navigate) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.post("/api/session/signup", credentials);
    const { user, token } = response.data;

    localStorage.setItem("token", token);

    dispatch(setUser(user));
    navigate("/");
  } catch (err) {
    dispatch(setError(err.response?.data?.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Create reducers
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        error: null,
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
    case LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
