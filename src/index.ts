import { App } from "./App";
import { createApp } from "./framework/app";

// Counter using framework
createApp({
  state: 0,

  reducers: {
    add: (state, amount) => state + amount,
    remove: (state, amount) => state - amount,
  },

  view: (state, emit) => App(state, emit),
}).mount(document.body);
