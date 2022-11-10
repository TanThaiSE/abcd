import { createSelector } from "reselect";
import { INIT_STATE } from "../state";
const selectMyClass = (state) => state || INIT_STATE;

const selectLoading = createSelector(selectMyClass, (state) => state.isLoading);
const selectStudents = createSelector(
  selectMyClass,
  (state) => state.students.data
);

export { selectLoading, selectStudents };
