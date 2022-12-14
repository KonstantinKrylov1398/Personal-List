import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./form.less";
import { useNavigate } from "react-router-dom";
import { filterArchiveArray } from "../../utils/filterArchiveArray";
import { filterPostArray } from "../../utils/filterPostArray";
import { sortArray } from "../../utils/sortPersonals";
import axios from "axios";
import { SortArray } from "../../Redux/actionSortArray";
export interface personaldatatype {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}
export function Form() {
  const [data, setData] = useState<personaldatatype[]>([]);
  const [filterArchive, setFilterArchive] = useState<personaldatatype[]>([]);
  const [filterPost, setFilterPost] = useState<personaldatatype[]>([]);
  const [sort, setSort] = useState<personaldatatype[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/Personals").then((res) => {
      setData(res.data);
      setFilterArchive(res.data);
      setFilterPost(res.data);
      setSort(res.data);
      dispatch(SortArray(res.data));
    });
  }, []);
  return (
    <div>
      <button onClick={() => navigate("/post")} className={style.post_button}>
        Добавить нового сотрудника в систему
      </button>
      <form className={style.todo_form}>
        <select
          className={style.form_select}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            sortArray(event.target.value, sort, dispatch);
          }}
          name="Сортировать сотрудников по:"
        >
          <option value="Сортировать сотрудников по:">
            Сортировать сотрудников по:
          </option>
          <option value="name">Имени</option>
          <option value="birthday">Дате рождения</option>
        </select>
        <select
          className={style.form_select}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            filterPostArray(
              event.target.value,
              data,
              dispatch,
              setFilterPost,
              filterArchive,
              setSort
            )
          }
        >
          <option value="">Выберите должность сотрудника</option>
          <option value="driver">Водитель</option>
          <option value="waiter">Официант</option>
          <option value="cook">Повар</option>
        </select>
        <label className={style.form_select}>
          В архиве:
          <label className={style.form_radio}>
            Да
            <input
              onChange={() =>
                filterArchiveArray(
                  true,
                  data,
                  dispatch,
                  setFilterArchive,
                  filterPost,
                  setSort
                )
              }
              type="radio"
              name="archive"
            />
          </label>
          <label className={style.form_radio}>
            Нет
            <input
              onChange={() =>
                filterArchiveArray(
                  false,
                  data,
                  dispatch,
                  setFilterArchive,
                  filterPost,
                  setSort
                )
              }
              type="radio"
              name="archive"
            />
          </label>
        </label>
      </form>
    </div>
  );
}
