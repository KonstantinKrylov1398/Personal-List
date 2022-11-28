import { Dispatch } from "redux";
import { personaldatatype } from "../components/Form";
import { SortArray } from "../Redux/actionSortArray";
import { parseDate } from "./parseDate";

export const sortArray = (
  value: string,
  data: personaldatatype[],
  dispatch: Dispatch
) => {
  const sort = [...data].sort(
    (a: personaldatatype, b: personaldatatype): any => {
      if (value === "name") {
        if (a[value] > b[value]) {
          return 1;
        }
        if (a[value] < b[value]) {
          return -1;
        }
        return 0;
      }
      if (value === "birthday") {
        return parseDate(a, value) - parseDate(b, value);
      }
    }
  );
  return dispatch(SortArray(sort));
};
