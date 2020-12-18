import { combineReducers } from "redux";
import SelectMenuReducer from "./SelectMenuReducer";
import Movie from "./MoiveReducer";
import CinemaHome from "./CinemaHome";
import UserReducer from "./UserReducer";
import BookingReducer from "./BookingReducer";
import DetailReducer from "./DetailReducer";
import CommonReducer from "./CommonReducer";
const rootReducer = combineReducers({
  CommonReducer,
  UserReducer,
  SelectMenuReducer,
  Movie,
  CinemaHome,
  BookingReducer,
  DetailReducer,
});
export { rootReducer };
