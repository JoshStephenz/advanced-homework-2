import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import state from "./state";

let currentCategory = "tires";

function changeCategory(category){
  currentCategory = category;
  render();
}


function render() {
  ReactDOM.render(
    <App

    state={state.products}
    changeCategory={changeCategory}
    currentCategory={currentCategory}

    />,
    document.getElementById("root")
  );
}
render();
