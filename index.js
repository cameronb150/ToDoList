import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});

// TODO - The type of input for the `Task Name` should be **text**.

// TODO - The initial view should have no tasks in the table.

// TODO -  Clicking the `Add Task` button should:
//  - add a task in the todo list table with 3 cells: the `Task Name`, a `Mark as Complete` button and a `Delete` button respectively.
//  - display an alert saying "Please enter the task name" if the input box for the `Task Name` is empty.
//  - reset the input box for the `Task Name` to empty after adding a valid task to the table.
