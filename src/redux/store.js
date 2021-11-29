import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./appReducers";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware
    = applyMiddleware(
    save(),
    thunk// Saving done here
)(createStore)

// function configureStore(initialState) {
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
//   return createStoreWithMiddleware(
//       rootReducer,
//       initialState,
//       composeEnhancers(),
//       load()
//   );
// }
// export const store = configureStore();
export const store = createStoreWithMiddleware(
    rootReducer,
    load() // Loading done here
)

