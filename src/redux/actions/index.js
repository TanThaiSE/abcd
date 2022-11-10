// import { createActions, createAction } from "redux-actions";

// export const getType = (reduxAction) => {
//   return reduxAction().type;
// };

// export const getStudents = createActions({
//   getStudentsRequest: undefined,
//   getStudentsSuccess: (payload) => payload,
//   getStudentsFailure: (err) => err,
// });

// export const createStudent = createActions({
//   createStudentRequest: (payload) => payload,
//   createStudentSuccess: (payload) => payload,
//   createStudentErr: (err) => err,
// });

// export const updateStudent = createActions({
//   updateStudentRequest: (payload) => payload,
//   updateStudentSuccess: (payload) => payload,
//   updateStudentErr: (err) => err,
// });

// export const deleteStudent = createActions({
//   deleteStudentRequest: (payload) => payload,
//   deleteStudentSuccess: (payload) => payload,
//   deleteStudentErr: (err) => err,
// });

// export const showModal = createAction("SHOW_CREATE_POST_MODAL");
// export const hideModal = createAction("HIDE_CREATE_POST_MODAL");

// /*
//   getType(getStudents.getStudentSuccess)
//   =>
//   {
//     type: 'getStudentSuccess',
//     payload: {
//       name: 'Test'
//     }
//   }
// */
import {
  SET_LOADING_STEP,
  GET_ALL_STUDENTS,
  SAVE_ALL_STUDENTS,
  CREATE_STUDENT_REQUEST,
} from "../constants";

export function setLoadingStep(payload) {
  return {
    type: SET_LOADING_STEP,
    payload,
  };
}

export function getAllStudents(payload) {
  return {
    type: GET_ALL_STUDENTS,
    payload,
  };
}

export function saveALlStudents(payload) {
  return {
    type: SAVE_ALL_STUDENTS,
    payload,
  };
}

export function createStudent(payload, resolve) {
  return {
    type: CREATE_STUDENT_REQUEST,
    payload,
    resolve,
  };
}

export function asyncCreateStudent(dispatch) {
  return function returnAsync(payload) {
    return new Promise((resolve) => dispatch(createStudent(payload, resolve)));
  };
}
