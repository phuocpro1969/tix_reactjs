const initialState = {
  listMovie: [],
};
const Movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_MOVIE_SUCCESS": {
      // console.log(action.payload);
      return { ...state, listMovie: action.payload };
    }
    default:
      return { ...state };
  }
};
export default Movie;
