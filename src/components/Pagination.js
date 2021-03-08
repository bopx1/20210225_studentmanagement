import React from "react";
import style from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { moveExactlyToPage, refreshStudentList } from "../action/actionCreator";
import { appConstants } from "../constants";
import { Pagination } from "antd";

export default function PaginationCpn() {
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const searchValue = useSelector((state) => state.search.searchValue);
  const studentList = useSelector((state) => state.students.studentList);
  const totalItem = useSelector((state) => state.students.totalItem);

  // const totalMatch = studentList.filter(
  //   (student) =>
  //     student.name.includes(searchValue) ||
  //     student.phoneNumber.includes(searchValue)
  // ).length;
  const dispatch = useDispatch();

  const handleMoveExactlyToPage = (pageNumber) => {
    dispatch(moveExactlyToPage(pageNumber));
  };

  return (
    <div className={style.pages}>
      <Pagination
        defaultCurrent={currentPage}
        total={totalItem}
        pageSize={appConstants.pageSize}
        onChange={handleMoveExactlyToPage}
      />
    </div>
  );
}
