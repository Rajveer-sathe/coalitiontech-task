import axios from "axios";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../store/action/action";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = process.env.REACT_APP_USERNAME;
    const password = process.env.REACT_APP_PASSWORD;
    const auth = btoa(`${username}:${password}`);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      });
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
