import { combineReducers } from "redux";
import BarangReduce from "./barangReducer";

const rootReducer = combineReducers({
  barangState: BarangReduce,
});

export default rootReducer;
