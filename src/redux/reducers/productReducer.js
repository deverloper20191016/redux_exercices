// state lưu giá trị của hệ thống

const initialState = {
  products: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, products: action.products };

    case "UPDATE_PRODUCT":
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;
