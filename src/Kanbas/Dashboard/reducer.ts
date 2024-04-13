import { createSlice } from "@reduxjs/toolkit";
import { CourseType } from "../index";

interface InitialStateTypes {
  courses: CourseType[];
  course: CourseType;
}

const initialState: InitialStateTypes = {
  courses: [],
  course: {
    title: "New Course",
    description: "ENGW2100.39124.202430",
    filename: "yellow.png",
    "sub-body": "202430_1 Spring 2024 Semester Full Term",
    course_id: "test",
  },
};

const courseSlice = createSlice({
  name: "courseReducer",
  initialState: initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = [...state.courses, action.payload];
    },

    setCourses: (state, action) => {
      state.courses = action.payload;
    },

    setCourse: (state, action) => {
      state.course = action.payload;
    },

    updateCourse: (state, action) => {
      state.courses = state.courses.map((c) => {
        if (c.course_id === state.course.course_id) {
          return state.course;
        } else {
          return c;
        }
      });
    },
  },
});

export const { updateCourse, addCourse, setCourse, setCourses } =
  courseSlice.actions;

export default courseSlice.reducer;
