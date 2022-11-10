import { INIT_STATE } from "../state";
import produce from "immer";

import { SET_LOADING_STEP, SAVE_ALL_STUDENTS } from "../constants";

export default function studentsReducers(state = INIT_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_LOADING_STEP:
        draft.isLoading = action.payload;
        break;
      case SAVE_ALL_STUDENTS:
        console.log(action.payload);
        draft.students.data = action.payload;
        break;
      default:
        return state;
    }
  });
}
