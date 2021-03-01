import studentData  from "../studentData";
import { actionType } from '../action/actionType';
import { STUDENTS_LIST } from "../constants/LocalStorageItem";

const getStudentModify = () => {
    const student = localStorage.getItem('studentModifying');
    if (student)
        return JSON.parse(student);
    else return {
        id: '',
        name: '',
        age: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        dayAdmission: '',
        img: ''
    }
}

const getStudentList = () => {
    const studentsList = localStorage.getItem(STUDENTS_LIST);
    if(!studentsList){
        localStorage.setItem(STUDENTS_LIST, JSON.stringify(studentData));
    }
    return studentsList ? JSON.parse(studentsList) : studentData;
}

const initialState = {
    newStudent: {
        id: '',
        name: '',
        age: '',
        phoneNumber: '',
        birthday: '',
        gender: '',
        dayAdmission: '',
        img: './studentImg/default.png'
    },
    studentisModified: getStudentModify(),
    studentList : getStudentList(),
    totalStudent: getStudentList().length,
    studentMatchedWithSearch: []
}

export const students = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADDNEW_STUDENT: {
            return {
                ...state,
                studentList: action.payload.students
            }
        }
        case actionType.SEARCH_STUDENT: {
            return {
                ...state,
                studentMatchedWithSearch: action.payload.studentsMatched
            }
        }
        
        case actionType.MODIFY_STUDENT.EDITING_IMG: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    img: action.payload.urlImg
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_NAME: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    name: action.payload.name
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_PHONENUMBER: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    phoneNumber: action.payload.phoneNumber
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_BIRTHDAY: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    birthday: action.payload.birthday
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_DAYADMISSION: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    dayAdmission: action.payload.dayAdmission
                }
            }
        }
        case actionType.MODIFY_STUDENT.EDITING_GENDER: {
            return {
                ...state,
                studentisModified: {
                    ...state.studentisModified,
                    gender: action.payload.gender
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_IMG: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    img: action.payload.urlImg
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_NAME: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    name: action.payload.name
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_PHONENUMBER: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    phoneNumber: action.payload.phoneNumber
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_BIRTHDAY: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    birthday: action.payload.birthday
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_DAYADMISSION: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    dayAdmission: action.payload.dayAdmission
                }
            }
        }
        case actionType.ADD_STUDENT.ADDING_GENDER: {
            return {
                ...state,
                newStudent: {
                    ...state.newStudent,
                    gender: action.payload.gender
                }
            }
        }
        default: return state;
    }
}

