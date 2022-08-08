import {
  SET_PRODUCT,
  SET_UOM,
  SET_PRODUCT_ERROR,
  SET_PRODUCT_LOADING,
} from "../actionType";

const initialStates = {
  products: [],
  uom: [],
  error: null,
  loading: false,
};

const productReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case SET_UOM:
      return {
        ...state,
        uom: payload,
      };
    case SET_PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
      };
    case SET_PRODUCT_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
