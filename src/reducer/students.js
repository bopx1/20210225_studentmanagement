import studentData from "../studentData";
import { actionType } from "../action/actionType";
import { v4 as uuidv4 } from "uuid";

// const getStudentList = () => {
//   const localList = localStorage.getItem("updatedList");
//   if (localList) return JSON.parse(localList);
//   else return studentData;
// };

const initialState = {
  isLoading: false,
  isError: false,
  studentList: [],
  totalItem: 0
};

export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionType.START_REFRESH_LOADING_STUDENT: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        studentList: [],
        totalItem: 0
      }
    }
    case actionType.REFRESH_STUDENT_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        studentList: action.payload.newStudentList,
        totalItem: action.payload.totalItem
      }
    }
    case actionType.REFRESH_STUDENT_LIST_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    case actionType.MODIFY_STUDENT.SAVE: {
      const modifiedStudent = action.payload.modifiedStudent;

      const newStudentList = state.studentList.map((s) =>
        s.id === modifiedStudent.id ? modifiedStudent : s
      );
      localStorage.setItem("updatedList", JSON.stringify(newStudentList));
      return {
        ...state,
        studentList: newStudentList,
      };
    }
    case actionType.ADD_STUDENT.SAVE: {
      const newStudent = { ...action.payload.newStudent, id: uuidv4() };

      const newStudentList = [...state.studentList, newStudent];
      localStorage.setItem("updatedList", JSON.stringify(newStudentList));
      return {
        ...state,
        studentList: newStudentList,
      };
    }
    default:
      return state;
  }
};
