import React, { useEffect } from "react";
import style from "./StudentList.module.css";
import StudentItem from "./StudentItem";
import { useDispatch, useSelector } from "react-redux";
import { appConstants } from "../constants";
import { refreshStudentList } from "../action/actionCreator";

export default function StudentList() {
  const dispatch = useDispatch();
  const studentList = useSelector((state) => state.students.studentList);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const searchValue = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    async function fetchData() {
      dispatch(refreshStudentList());
    }
    fetchData();
  }, [dispatch, searchValue, currentPage]);

  const studentMatchSearch = studentList
    .filter(
      (student) =>
        student.name.includes(searchValue) ||
        student.phoneNumber.includes(searchValue)
    );

  const renderStudentList = () =>
    studentMatchSearch.map((student) => (
      <StudentItem key={student.id} student={student} />
    ));

  if (studentMatchSearch.length === 0) {
    return (
      <div className={style.list}>
        <p>Không tìm thấy kết quả nào</p>
      </div>
    );
  } else return <div className={style.list}>{renderStudentList()}</div>;
}
