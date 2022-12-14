import axios from "axios";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./editmodalwindow.less";
import InputMask from "react-input-mask";
import { mystate } from "../../Redux/Reducer";
import { SortArray } from "../../Redux/actionSortArray";
import { useDispatch } from "react-redux";
export function EditModalWindow() {
  const [error, setError] = useState(false);
  const personalData = useSelector((state: mystate) => state.personalData);
  const [name, setName] = useState(personalData.name);
  const [phone, setPhone] = useState(personalData.phone);
  const [birthday, setBirthday] = useState(personalData.birthday);
  const [role, setRole] = useState(personalData.role);
  const [archive, setArchive] = useState(personalData.isArchive);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const button: any = useRef(null);
  const onChangeData = () =>
    axios
      .put(`http://localhost:3000/Personals/${personalData.id}`, {
        id: personalData.id,
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
    navigate("/");
    onChangeData();
  };
  useEffect(() => {
    if (
      name.length === 0 ||
      phone.length === 0 ||
      birthday.length === 0 ||
      role === "???????????????? ?????????????????? ????????????????????"
    ) {
      button.current.disabled = true;
      setError(true);
    } else {
      button.current.disabled = false;
      setError(false);
    }
  }, [name, phone, birthday, role]);
  return (
    <div className={style.edit}>
      <button className={style.edit_button} onClick={() => navigate("/")}>
        ???? ??????????????
      </button>
      {error && <div className={style.edit_error}>?????????????? ?????? ????????????</div>}
      <form className={style.form} onSubmit={onSubmit}>
        <input
          value={name}
          className={style.form_input}
          onChange={onChangeName}
          placeholder="???????????????? ?????? ????????????????????"
          type="text"
        />
        <InputMask
          mask="+7 (999)-999-9999"
          value={phone}
          className={style.form_input}
          onChange={onChangePhone}
          placeholder="???????????????? ?????????? ????????????????"
        />
        <InputMask
          mask="99.99.9999"
          value={birthday}
          className={style.form_input}
          onChange={onChangeBirthday}
          placeholder="???????????????? ???????? ????????????????"
        />
        <select
          value={role}
          onChange={onChangeRole}
          className={style.form_input}
        >
          <option value="">???????????????? ?????????????????? ????????????????????</option>
          <option value="driver">????????????????</option>
          <option value="waiter">????????????????</option>
          <option value="cook">??????????</option>
        </select>
        <label className={style.form_input}>
          ?? ????????????
          <input onChange={onChangeArchive} checked={archive} type="checkbox" />
        </label>
        <button ref={button} className={style.form_button}>
          ?????????????????????????????? ????????????
        </button>
      </form>
    </div>
  );
}
