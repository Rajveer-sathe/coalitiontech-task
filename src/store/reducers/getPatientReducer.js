import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SELECT_PATIENT,
} from "../action/actionType.js";

const initialState = {
  loading: false,
  data: [],
  error: null,
  selectedPatient: [],
};

const getPatientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    case SELECT_PATIENT:
      return { ...state, selectedPatient: action.payload };
    default:
      return state;
  }
};

export default getPatientsReducer;
