import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/appReducers";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;
