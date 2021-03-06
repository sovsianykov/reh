import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiAction } from "../redux/actions";
import { useTypesSelector } from "./useTypesSelector";

export const useFetch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiAction.fetchStart());
    dispatch(apiAction.fetchSuccess());
  }, [dispatch]);
  const { list, loading, error, login} = useTypesSelector(
    (state) => state.apiReducer
  );

  return { list, loading, error, login};
};
