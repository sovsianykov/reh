import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiAction } from "../redux/actions";
import { useTypesSelector } from "./useTypesSelector";

const useFetch = (searchWord: string, activeMenuId: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiAction.fetchData(searchWord, activeMenuId));
  }, [activeMenuId, dispatch, searchWord]);
  return useTypesSelector((state) => state.apiReducer);
};
export default useFetch;
