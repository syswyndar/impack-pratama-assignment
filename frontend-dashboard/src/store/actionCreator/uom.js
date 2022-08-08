import {
  SET_PRODUCT,
  SET_PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
  SET_UOM,
} from "../actionType";
import Axios from "axios";

const DEV_URL = "http://localhost:3000/api/v1";

const setUom = (payload) => {
  return {
    type: SET_UOM,
    payload,
  };
};

const setError = (payload) => {
  return {
    type: SET_PRODUCT_ERROR,
    payload,
  };
};

const setLoading = (payload) => {
  return {
    type: SET_PRODUCT_LOADING,
    payload,
  };
};

export const GetUom = () => {
  return async (dispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    try {
      let { data } = await Axios.get(`${DEV_URL}/uom`);
      if (data) {
        dispatch(setUom(data.data));
      }
      return;
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    } finally {
      setLoading(false);
    }
  };
};
