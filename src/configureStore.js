import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
  );

  if (process.env.NODE_ENV !== "production") {
    // Hot reloading
    // @ts-ignore
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      // @ts-ignore
      module.hot.accept("./reducers", () => {
        store.replaceReducer(createRootReducer(history));
      });
    }
  }

  return store;
};
export default configureStore;
