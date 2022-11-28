import { Dispatch } from "redux";
import { personaldatatype } from "../components/Form";
import { SortArray } from "../Redux/actionSortArray";

export const filterArchiveArray = (
  checked: boolean,
  data: personaldatatype[],
  dispatch: Dispatch,
  setFilterArchive: React.Dispatch<React.SetStateAction<personaldatatype[]>>,
  filterPost: personaldatatype[],
  setSort: React.Dispatch<React.SetStateAction<personaldatatype[]>>
) => {
  const filterArray = [...data].filter((data) => data.isArchive === checked);
  const twoFilterArray = [...filterPost].filter(
    (data) => data.isArchive === checked
  );
  setSort(twoFilterArray);
  setFilterArchive(filterArray);
  dispatch(SortArray(twoFilterArray));
};
