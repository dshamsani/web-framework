// import { Counter } from "./examples/counter/counter";
import { Todo } from "./examples/todo/todo";
import { createApp } from "./framework/app";

// Counter using framework
// createApp({
//   state: 0,

//   reducers: {
//     add: (state, amount) => state + amount,
//     remove: (state, amount) => state - amount,
//   },

//   view: (state, emit) => Counter(state, emit),
// }).mount(document.body);

// Todo using framework

const state = {
  currentTodo: "",
  edit: {
    idx: null,
    original: null,
    edited: null,
  },
  todos: ["Walk the dog", "Water the plants"],
};

const reducers = {
  "update-current-todo": (stateInstance: typeof state, currentTodo: string) => ({
    ...stateInstance,
    currentTodo,
  }),
  "add-todo": (stateInstance: typeof state) => ({
    ...stateInstance,
    currentTodo: "",
    todos: [...stateInstance.todos, stateInstance.currentTodo],
  }),
  "start-editing-todo": (stateInstance: typeof state, idx: number) => ({
    ...stateInstance,
    edit: {
      idx,
      original: stateInstance.todos[idx],
      edited: stateInstance.todos[idx],
    },
  }),
  "edit-todo": (stateInstance: typeof state, edited: string) => ({
    ...stateInstance,
    edit: {
      ...stateInstance.edit,
      edited,
    },
  }),
  "save-edited-todo": (stateInstance: typeof state) => {
    const todos = [...stateInstance.todos];
    if (stateInstance.edit.idx !== null && stateInstance.edit.edited !== null) {
      todos[stateInstance.edit.idx] = stateInstance.edit.edited;
    }

    return {
      ...stateInstance,
      edit: {
        idx: null,
        original: null,
        edited: null,
      },
      todos,
    };
  },
  "cancel-editing-todo": (stateInstance: typeof state) => ({
    ...stateInstance,
    edit: {
      idx: null,
      original: null,
      edited: null,
    },
  }),
  "remove-todo": (stateInstance: typeof state, idx: number) => ({
    ...stateInstance,
    todos: stateInstance.todos.filter((_, i) => i !== idx),
  }),
};

createApp({
  state,
  reducers,
  view: (state, emit) => Todo(state, emit),
}).mount(document.body);
