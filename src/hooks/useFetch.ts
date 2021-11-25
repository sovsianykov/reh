import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { apiAction } from "../redux/actions";
import {useTypesSelector} from "./useTypesSelector";



export const useFetch = () =>{
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(apiAction.fetchStart())
    dispatch(apiAction.fetchSuccess())
    // dispatch(errorMessage())
  },[dispatch])
  console.log("fetch")
  const { list , loading, error } = useTypesSelector(state => state.apiReducer)

  return { list , loading, error }
}