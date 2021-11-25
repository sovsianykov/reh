import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./appReducers";
import thunk from "redux-thunk";

function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
  );
}
export const store = configureStore();
