import axios from "../../axios/axios-base";

export const getProduct = () => {
  let url = "/products";
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        let data = response.data;
        return dispatch({
          type: "GET_PRODUCT_SUCCESS",
          products: data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: "GET_PRODUCT_ERROR",
          error,
        });
      });
  };
};

export const getProductById = (id) => {
  let url = "/products";
  axios
    .get(url)
    .then((response) => {
      let data = response.data;
      return {
        type: "GET_PRODUCT_SUCCESS",
        products: data,
      };
    })
    .catch((error) => {
      return {
        type: "GET_PRODUCT_ERROR",
        error,
      };
    });
};
