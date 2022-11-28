import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PersonalData } from "../../Redux/actionPersonalData";
import { mystate } from "../../Redux/Reducer";
import { personaldatatype } from "../Form";
import style from "./personals.less";
export function Personals() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sortArray = useSelector((state: mystate) => state.sortArray);
  return (
    <ul className={style.todo_ul}>
      {sortArray
        ? sortArray.map((data: personaldatatype) => (
            <li
              onClick={() => {
                dispatch(PersonalData(data));
                navigate("/edit");
              }}
              className={style.todo_li}
              key={data.id}
            >
              <div className={style.todo_data}>{data.name}</div>
              <div className={style.todo_data}>{data.role}</div>
              <div className={style.todo_data}>{data.phone}</div>
            </li>
          ))
        : ""}
    </ul>
  );
}
