import type { FC } from "../../framework/types/global";

import { h, hFragment } from "../../framework/h";

export const Todo: FC = (state, emit) => {
  return hFragment([h("h1", {}, ["My Todos"]), CreateTodo(state, emit), TodoList(state, emit)]);
};

const CreateTodo: FC = ({ currentTodo }, emit) => {
  return h("div", {}, [
    h("label", { for: "todo-input" }, ["New Todo"]),
    h(
      "input",
      {
        type: "text",
        id: "todo-input",
        value: currentTodo,
        on: {
          input: ({ target }) => emit("update-current-todo", target.value),
          keydown: ({ key }) => {
            if (key === "Enter" && currentTodo.length > 3) {
              emit("add-todo", undefined);
            }
          },
        },
      },
      []
    ),
    h(
      "button",
      {
        disabled: currentTodo.length < 3,
        on: {
          click: () => emit("add-todo", undefined),
        },
      },
      ["Add"]
    ),
  ]);
};

const TodoList: FC = ({ todos, edit }, emit) => {
  return h(
    "ul",
    {},
    todos.map((todo, i) => TodoItem({ todo, i, edit }, emit))
  );
};

const TodoItem = ({ todo, i, edit }, emit) => {
  const isEditing = edit.idx === i;

  return isEditing
    ? h("li", {}, [
        h(
          "input",
          {
            value: edit.edited,
            on: {
              input: ({ target }) => emit("edit-todo", target.value),
            },
          },
          []
        ),
        h(
          "button",
          {
            on: {
              click: () => emit("save-edited-todo"),
            },
          },
          ["Save"]
        ),
        h(
          "button",
          {
            on: {
              click: () => emit("cancel-editing-todo"),
            },
          },
          ["Cancel"]
        ),
      ])
    : h("li", {}, [
        h(
          "span",
          {
            on: {
              dblclick: () => emit("start-editing-todo", i),
            },
          },
          [todo]
        ),
        h(
          "button",
          {
            on: {
              click: () => emit("remove-todo", i),
            },
          },
          ["Done"]
        ),
      ]);
};
