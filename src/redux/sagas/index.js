import { takeLatest, call, put } from "redux-saga/effects";
// import * as actions from "../actions";
import { saveALlStudents, setLoadingStep } from "../actions";
import * as api from "../../api";
import { GET_ALL_STUDENTS, CREATE_STUDENT_REQUEST } from "../constants";

function* fetchStudentsSaga() {
  try {
    yield put(setLoadingStep(true));
    const res = yield call(api.getListStudents);
    yield put(saveALlStudents(res.data));
    yield put(setLoadingStep(false));
  } catch (err) {
    console.error(err);
    yield put(setLoadingStep(false));
  }
}

function* createStudentSaga({ payload, resolve }) {
  try {
    const response = yield call(api.creatStudent, payload);
    resolve(response);
  } catch (err) {
    console.error(err);
    resolve(null);
  }
}

// function* updateStudentSaga(action) {
//   try {
//     const updatedStudent = yield call(api.updateStudent, action.payload);
//     yield put(actions.updateStudent.updateStudentSuccess(updatedStudent.data));
//   } catch (err) {
//     console.error(err);
//     yield put(actions.updateStudent.updateStudentErr(err));
//   }
// }

// function* deleteStudentSaga(action) {
//   try {
//     const deleteStudent = yield call(api.deleteStudent, action.payload);
//     yield put(actions.deleteStudent.deleteStudentSuccess(deleteStudent.data));
//   } catch (err) {
//     console.error(err);
//     yield put(actions.deleteStudent.deleteStudentErr(err));
//   }
// }

function* mySaga() {
  yield takeLatest(GET_ALL_STUDENTS, fetchStudentsSaga);
  yield takeLatest(CREATE_STUDENT_REQUEST, createStudentSaga);
  // yield takeLatest(
  //   actions.createStudent.createStudentRequest,
  //   createStudentSaga
  // );
  // yield takeLatest(
  //   actions.updateStudent.updateStudentRequest,
  //   updateStudentSaga
  // );
  // yield takeLatest(
  //   actions.deleteStudent.deleteStudentRequest,
  //   deleteStudentSaga
  // );
}

// generator function ES6

export default mySaga;
