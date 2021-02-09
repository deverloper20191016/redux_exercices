import { createStore } from "redux";

var initialState = {
  status: false,
  sort: {
    by: "name",
    value: 1,
  },
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_STATUS":
      //   state.status = !state.status;
      //   return state;
      return { ...state, status: !state.status }; // <=> state.status = !state.status return state;

    case "SORT":
      //   var { by, value } = action.sort; // <=> var by = action.sort.by; var value = action.sort.value;
      //   var { status } = state; // <=> var status = state.status;

      //   state.sort = {
      //     by: action.sort.by,
      //     value: action.sort.value,
      //   };
      //   return state;
      //   return {
      //     status: status,
      //     sort: {
      //       by: by,
      //       value: value,
      //     },
      //   };
      return { ...state, sort: action.sort };

    default:
      return state;
  }
};

const store = createStore(myReducer);

console.log("Default: ", store.getState());

// Thực hiện thay đổi status
var action = {
  type: "TOGGLE_STATUS",
};
store.dispatch(action);

console.log("Sau khi toggle status: ", store.getState());

// Thực hiện sắp xếp tên từ Z -> A
var sortAction = {
  type: "SORT",
  sort: {
    by: "name",
    value: -1,
  },
};

store.dispatch(sortAction);
console.log("Sau khi sort: ", store.getState());
