import {
  SET_PRODUCT,
  SET_PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
  SET_UOM,
} from "../actionType";
import Axios from "axios";

const DEV_URL = "http://localhost:3000/api/v1";

const setProduct = (payload) => {
  return {
    type: SET_PRODUCT,
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

export const createNewProduct = (input) => {
  return async (dispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    try {
      let { data } = await Axios.post(`${DEV_URL}/products`, input);
      if (data.success === true) {
        return data.data;
      }
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const getProduct = () => {
  return async (dispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    try {
      let { data } = await Axios.get(`${DEV_URL}/products`);
      console.log(data, "ini data action creator");
      if (data.success === true) {
        dispatch(setProduct(data.data));
        return data.data;
      }
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setError(null));
    dispatch(setLoading(true));
    try {
      let { data } = await Axios.delete(`${DEV_URL}/products/${id}`);
      return data;
    } catch (err) {
      console.log(err);
      dispatch(setError(err));
    } finally {
      dispatch(setLoading(false));
    }
  };
};
