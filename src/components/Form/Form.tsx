import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./form.less";
import { useNavigate } from "react-router-dom";
import { getPersonal } from "../../Redux/thunk";
import { filterArchiveArray } from "../../utils/filterArchiveArray";
import { filterPostArray } from "../../utils/filterPostArray";
import { sortArray } from "../../utils/sortPersonals";
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
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getPersonal(setData, setFilterArchive, setFilterPost, setSort));
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
            console.log(sortArray(event.target.value, sort, dispatch));
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
