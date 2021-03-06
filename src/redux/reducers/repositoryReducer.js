const initialState = {
  userLogin: "ADMIN",
  token: "123456",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERLOGIN":
      return { ...state };

    case "UPDATE_USER_LOGIN":
      // action có:
      // type: "UPDATE_USER_LOGIN",
      // wqewqeqw:
      return { ...state, userLogin: action.wqewqeqw };

    case "ADD_DESCRIPTION":
      // action có:
      // type: "ADD_DESCRIPTION",
      // description,
      // abc
      // age
      return { ...state, description: action.description };

    default:
      return { ...state };
  }
};

export default reducer;
