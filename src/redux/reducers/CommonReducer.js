const initialState = {
  isLoading: false,
};
const CommonReducer = (state = initialState, action) => {
  let { type, payload } = action; // bóc tách ES6
  switch (type) {
    case "START_LOADING": {
      return { ...state, isLoading: true };
    }
    case "STOP_LOADING": {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
};

export default CommonReducer;
