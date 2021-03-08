import { appConstants } from "../constants";
import { getStudent } from "../studentService";
import { actionType } from "./actionType";

export const refreshStudentList = () => {
  return async function (dispatch, getState) {
    const state = getState();
    const searchValue = state.search.searchValue;
    const currentPage = state.pagination.currentPage;
    const pageSize = appConstants.pageSize;
    try {
        console.log(currentPage);
      dispatch(startRefreshStudentList());
      const response = await getStudent(searchValue, currentPage, pageSize);
      let data = response.data;
      dispatch(refreshStudentListSuccess(data.data, data.meta.totalItem));
    } catch (ex) {
      console.log(ex);
      dispatch(refreshStudentListFailed());
    }
  };
};

export const startRefreshStudentList = () => ({
  type: actionType.START_REFRESH_LOADING_STUDENT,
  payload: {},
});

export const refreshStudentListSuccess = (newStudentList, totalItem) => ({
  type: actionType.REFRESH_STUDENT_LIST_SUCCESS,
  payload: {
    newStudentList,
    totalItem
  },
});

export const refreshStudentListFailed = () => ({
  type: actionType.REFRESH_STUDENT_LIST_FAILED,
  payload: {},
});

export const moveExactlyToPage = (page) => ({
  type: actionType.MOVE_EXACTLY_TO_PAGE,
  payload: {
    page,
  },
});

export const changeSearchingValue = (value) => ({
  type: actionType.CHANGE_SEARCHING_VALUE,
  payload: {
    value,
  },
});

export const editStudent = (modifiedStudent) => ({
  type: actionType.MODIFY_STUDENT.SAVE,
  payload: {
    modifiedStudent,
  },
});

export const saveStudent = (newStudent) => ({
  type: actionType.ADD_STUDENT.SAVE,
  payload: {
    newStudent,
  },
});
