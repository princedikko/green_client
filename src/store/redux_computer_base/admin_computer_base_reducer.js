import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const adminAssesmentReducer = createSlice({
  name: "admin_cbt_store",
  initialState: {
    isAuthenticated: false,
    queue: [],
    dashboard: {
      nav_trace: "",
    },
    examsSettings: {
      subject: "",
      duration: "",
      time: "",
      date: "",
      level: "",
      staff_id: "",
      instructions: [],
      course_title: "",
      course_code: "",
      questions: [],
      answers: [],
      questionIndex: 0,
    },
  },
  reducers: {
    loadExamsContents: (state, action) => {
      const data = action.payload.examsSettings;
      return {
        ...state,
        examsSettings: {
          ...state.examsSettings,
          subject: data.subject,
          duration: data.duration,
          time: data.time,
          date: data.date,
          level: data.level,
          staff_id: data.staff_id,
          instructions: data.instructions,
          course_title: data.course_title,
          course_code: data.course_code,
          questions: data.questions,
          answers: data.answers,
        },
      };
    },
    pushQuestion: (state, action) => {
      const { data } = action.payload;

      if (!Array.isArray(state.examsSettings.questions)) {
        state.examsSettings.questions = [];
      }

      state.examsSettings.questions.push(data);
    },

    navigator: (state, action) => {
      const { item } = action.payload;
      return {
        ...state,
        dashboard: {
          nav_trace: item,
        },
      };
    },
    clearAllQuestion: (state, action) => {
      return {
        ...state,
        queue: [],
      };
    },
    logOut: (state, action) => {
      return {
        ...state,

        isAuthenticated: false,
        queue: [],
        dashboard: {
          nav_trace: "",
        },
        examsSettings: {
          subject: "",
          duration: "",
          time: "",
          date: "",
          level: "",
          staff_id: "",
          instructions: [],
          course_title: "",
          course_code: "",
          questions: [],
          answers: [],
          questionIndex: 0,
        },
      };
    },
  },
});

export const {
  logOut,
  pushQuestion,
  navigator,
  clearAllQuestion,
  loadExamsContents,
} = adminAssesmentReducer.actions;

export default adminAssesmentReducer.reducer;
