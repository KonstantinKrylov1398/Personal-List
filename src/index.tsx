import { App } from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { myReducer } from "./Redux/Reducer";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
const store = createStore(myReducer, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("App")
);
