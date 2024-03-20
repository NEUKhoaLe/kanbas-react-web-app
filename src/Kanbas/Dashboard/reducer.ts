import { courses } from "../Database";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: courses,
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
    addNewCourse: (state, action) => {
      const newCourse = {
        ...state.course,
        course_id: new Date().getTime().toString(),
      };

      state.courses = [...state.courses, { ...state.course, ...newCourse }];
    },

    setCourse: (state, action) => {
      state.course = action.payload;
    },

    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.course_id !== action.payload,
      );
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

export const { addNewCourse, updateCourse, deleteCourse, setCourse } =
  courseSlice.actions;

export default courseSlice.reducer;
