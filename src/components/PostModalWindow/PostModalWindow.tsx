import axios from "axios";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import style from "./postmodalwindow.less";
import InputMask from "react-input-mask";
import { SortArray } from "../../Redux/actionSortArray";
import { useDispatch } from "react-redux";
export function PostModalWindow() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [role, setRole] = useState("");
  const [archive, setArchive] = useState(false);
  const navigate = useNavigate();
  const button: any = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      name.length === 0 ||
      phone.length === 0 ||
      birthday.length === 0 ||
      role === "Выберите должность сотрудника"
    ) {
      button.current.disabled = true;
      setError(true);
    } else {
      button.current.disabled = false;
      setError(false);
    }
  }, [name, phone, birthday, role]);

  const onPostData = () =>
    axios
      .post(`http://localhost:3000/Personals`, {
        name: name,
        phone: phone,
        birthday: birthday,
        role: role,
        isArchive: archive,
      })
      .then((res) =>
        axios.get("http://localhost:3000/Personals").then((res) => {
          dispatch(SortArray(res.data));
        })
      );

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const onChangeBirthday = (event: ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };
  const onChangeRole = (event: ChangeEvent<HTMLSelectElement>) => {
    setRole(event.target.value);
  };
  const onChangeArchive = (event: ChangeEvent<HTMLInputElement>) => {
    setArchive(event.target.checked);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onPostData();
    navigate("/");
  };
  return (
    <div className={style.post}>
      <button className={style.post_button} onClick={() => navigate("/")}>
        На главную
      </button>
      {error && <div className={style.post_error}>Введите все данные</div>}
      <form className={style.form} onSubmit={onSubmit}>
        <input
          value={name}
          className={style.form_input}
          onChange={onChangeName}
          placeholder="Введите имя сотрудника"
          type="text"
        />
        <InputMask
          mask="+7 (999)-999-9999"
          value={phone}
          className={style.form_input}
          onChange={onChangePhone}
          placeholder="Введите номер телефона"
        />
        <InputMask
          mask="99.99.9999"
          value={birthday}
          className={style.form_input}
          onChange={onChangeBirthday}
          placeholder="Введите дату рождения"
        />
        <select
          value={role}
          onChange={onChangeRole}
          className={style.form_input}
        >
          <option value="Выберите должность сотрудника">
            Выберите должность сотрудника
          </option>
          <option value="driver">Водитель</option>
          <option value="waiter">Официант</option>
          <option value="cook">Повар</option>
        </select>
        <label className={style.form_input}>
          В архиве
          <input onChange={onChangeArchive} checked={archive} type="checkbox" />
        </label>
        <button ref={button} className={style.form_button}>
          Добавить нового сотрудника
        </button>
      </form>
    </div>
  );
}
