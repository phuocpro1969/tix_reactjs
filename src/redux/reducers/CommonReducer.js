const initialState = {
  isLoading: false,
  count: 0,
};
const CommonReducer = (state = initialState, action) => {
  let { type } = action; // bóc tách ES6
  switch (type) {
    case "START_LOADING": {
      if (state.count === 0) {
        state.count++;
        return { ...state, isLoading: true , count: state.count };
      }
      else 
        return {...state} 
    }
    case "STOP_LOADING": {
      return { ...state, isLoading: false };
    }
    case "RESET_LOADING_COUNT": {
      return { ...state, count: action.payload };
    }
    default:
      return state;
  }
};

export default CommonReducer;
