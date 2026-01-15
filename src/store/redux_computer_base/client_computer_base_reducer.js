import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const studentAssesmentReducer = createSlice({
  name: "assessment_store",
  initialState: {
    isAuthenticated: false,
    queue: [],
    answers: [],
    asideNav: "",
  },
  reducers: {
    // EXAMINATION REDUCER FUNCTION-----------
    closeExam: (state, action) => {
      return {
        ...state,
        queue: [],
        isAuthenticated: false,
      };
    },
    executeExamsAction: (state, action) => {
      const { queue, answerFill } = action.payload;
      return {
        ...state,
        queue: queue,
        answers: answerFill,
      };
    },
    endExamsAction: (state, action) => {
      return {
        ...state,
        queue: [],
        answers: [],
      };
    },
    nextQuestion: (state, action) => {
      const { selectedSubject } = action.payload;
      return {
        ...state,
        queue: state.queue.map(
          (question, index) =>
            index === selectedSubject
              ? { ...question, questionIndex: question.questionIndex + 1 } // Update the specific item
              : question // Keep other items unchanged
        ),
      };
    },
    prevQuestion: (state, action) => {
      const { selectedSubject } = action.payload;
      return {
        ...state,
        queue: state.queue.map(
          (question, index) =>
            index === selectedSubject
              ? { ...question, questionIndex: question.questionIndex - 1 } // Update the specific item
              : question // Keep other items unchanged
        ),
      };
    },
    onnPegination: (state, action) => {
      const { selectedSubject, num } = action.payload; // Destructure the payload

      return {
        ...state,
        queue: state.queue.map(
          (question, index) =>
            index === selectedSubject
              ? { ...question, questionIndex: num } // Update the specific item
              : question // Keep other items unchanged
        ),
      };
    },

    pushAnswers: (state, action) => {
      const { selectedSubject, score, key } = action.payload;
      state.answers[selectedSubject].fill(score, score, score + 1);
    },

    fillAnswer: (state, action) => {
      const { selectedSubject, score, querry } = action.payload;
      state.answers[selectedSubject].fill(score, querry - 1, querry);
    },

    switchAsideNav: (state, action) => {
      return {
        ...state,
        asideNav: action.payload,
      };
    },
  },
});

export const {
  executeExamsAction,
  endExamsAction,
  nextQuestion,
  prevQuestion,
  onnPegination,
  fillAnswer,
  pushAnswers,
  switchAsideNav,
} = studentAssesmentReducer.actions;

export default studentAssesmentReducer.reducer;
