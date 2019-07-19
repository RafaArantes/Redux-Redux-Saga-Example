import React from "react";
import ReactDOM from "react-dom";
import TodoCard from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const mockProps = {
    module: {
      todo: "a todo",
      id: new Date().getTime()
    },
    editTodo: id => {
      console.log(id);
    },
    deleteTodo: id => {
      console.log(id);
    }
  };
  ReactDOM.render(<TodoCard {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
