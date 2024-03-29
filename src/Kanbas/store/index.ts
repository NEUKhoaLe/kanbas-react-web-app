import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import courseReducer from "../Dashboard/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };

  courseReducer: {
    course: any;
    courses: any[];
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    courseReducer,
  },
});

export default store;
