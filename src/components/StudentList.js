import React from "react";
import style from "./StudentList.module.css";
import StudentItem from "./StudentItem";
import { useSelector } from "react-redux";

export default function StudentList() {
  const totalStudent = useSelector((state) => state.students.totalStudent);
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const studentMatchedWithSearch = useSelector(
    (state) => state.students.studentMatchedWithSearch
  );
  const filterStudentIndex = () =>
    [
      (currentPage - 1) * 6,
      (currentPage - 1) * 6 + 1,
      (currentPage - 1) * 6 + 2,
      (currentPage - 1) * 6 + 3,
      (currentPage - 1) * 6 + 4,
      (currentPage - 1) * 6 + 5,
    ].filter((page) => page < totalStudent);

  const renderSearchedList = () =>
    studentMatchedWithSearch.map((student) => (
      <StudentItem key={student.id} student={student} />
    ));

  return <div className={style.list}>{renderSearchedList()}</div>;
}
