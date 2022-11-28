import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { personaldatatype } from "../components/Form";
import { SortArray } from "./actionSortArray";

export const getPersonal =
  (
    setData: React.Dispatch<React.SetStateAction<personaldatatype[]>>,
    setFilterArchive: React.Dispatch<React.SetStateAction<personaldatatype[]>>,
    setFilterPost: React.Dispatch<React.SetStateAction<personaldatatype[]>>,
    setSort: React.Dispatch<React.SetStateAction<personaldatatype[]>>
  ): ThunkAction<void, [], unknown, AnyAction> =>
  (dispatch) => {
    axios.get("http://localhost:3000/Personals").then((res) => {
      dispatch(SortArray(res.data));
      setSort(res.data);
      setData(res.data);
      setFilterArchive(res.data);
      setFilterPost(res.data);
    });
  };
