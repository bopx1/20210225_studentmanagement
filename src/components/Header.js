import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { searchStudent } from "../action/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const directToNewStudent = () => history.push("/NewStudent");
  const studentList = useSelector((state) => state.students.studentList);
  const dispatch = useDispatch();
  useEffect(() => {
    handleSearchStudent("");
  }, []);

  const handleSearchStudent = (value) => {
    console.log(studentList);
    const searchedItem = studentList.filter((student) => {
      console.log(student.name.toLowerCase());
      return (
        (student.name.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
        student.phoneNumber.toLowerCase().indexOf(value.toLowerCase()) >= 0) ||
        !value
      );
    });
    console.log(value);
    console.log(searchedItem);
    dispatch(searchStudent(searchedItem));
  };
  return (
    <div className={style.header}>
      <div className={style.top_area}>
        <h2>Quản lý sinh viên</h2>
        <button onClick={directToNewStudent}>
          <AddIcon className={style.plus} />
          <span>Thêm mới</span>
        </button>
      </div>
      <div className={style.search_area}>
        <input type="text" onChange={(e) => setSearchText(e.target.value)} />
        <SearchIcon
          className={style.search_button}
          onClick={() => handleSearchStudent(searchText)}
        />
      </div>
    </div>
  );
}
