import { combineReducers } from "redux";
import SelectMenuReducer from "./SelectMenuReducer";
import Movie from "./MoiveReducer";
import CinemaHome from "./CinemaHome";
import UserReducer from "./UserReducer";
import BookingReducer from "./BookingReducer";
import DetailReducer from "./DetailReducer";
const rootReducer = combineReducers({
  SelectMenuReducer,
  Movie,
  CinemaHome,
  UserReducer,
  BookingReducer,
  DetailReducer,
});
export { rootReducer };
