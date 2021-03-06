export const getDataSuccess = (data) => {
  return {
    type: "GET_ALL",
    data,
  };
};

export const updateProduct = (data) => {
  return {
    type: "UPDATE_PRODUCT",
    data,
  };
};

export const getUserLogin = (data) => {
  return {
    type: "GET_USERLOGIN",
    data,
  };
};

export const updateUserLogin = (data) => {
  return {
    type: "UPDATE_USER_LOGIN",
    wqewqeqw: data,
    age: 1000,
  };
};

export const addDescription = (description) => {
  return {
    type: "ADD_DESCRIPTION",
    description,
    abc: "Giá trị test",
    age: 20,
  };
};


