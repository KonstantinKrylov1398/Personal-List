import { Dispatch } from "redux";
import { personaldatatype } from "../components/Form";
import { SortArray } from "../Redux/actionSortArray";

export const filterPostArray = (
  post: string,
  data: personaldatatype[],
  dispatch: Dispatch,
  setFilterPost: React.Dispatch<React.SetStateAction<personaldatatype[]>>,
  filterArchive: personaldatatype[],
  setSort: React.Dispatch<React.SetStateAction<personaldatatype[]>>
) => {
  if (!post) {
    return;
  }
  const filterArray = [...data].filter((data) => data.role === post);
  const twoFilterArray = [...filterArchive].filter(
    (data) => data.role === post
  );
  setSort(twoFilterArray);
  setFilterPost(filterArray);
  dispatch(SortArray(twoFilterArray));
};
