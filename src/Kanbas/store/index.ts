import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
import courseReducer from "../Dashboard/reducer";
import usersReducer from "../../Users/UsersReducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };

  courseReducer: {
    course: any;
    courses: any[];
  };

  usersReducer: {
    user: any;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    courseReducer,
    usersReducer,
  },
});

export default store;
