import axios from 'axios';
const user = 'vu';
const url = '';
const domain = 'http://localhost:5000/Student/'
const getStudentEndPoint = domain + `getStudents`;
const addStudentEndPoint = domain + `addStudent`;
const modifyStudentEndPoint = domain + `modifyStudent`;

export const getStudent = async (search, page, pageSize) => 
    await axios.get(getStudentEndPoint, {
        params: {
            search,
            page,
            pageSize
        }
    });

export const addStudent = async (newStudent) => 
    await axios.get(addStudentEndPoint, {
        user: user,
        newStudent: newStudent
    });

export const modifyStudent = async (modifiedStudent) => 
    await axios.get(modifyStudentEndPoint, {
        user: user,
        modifiedStudent: modifiedStudent
    });