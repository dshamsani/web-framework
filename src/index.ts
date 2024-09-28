import { createApp } from "./framework/app";
import { h, hString } from "./framework/h";

import "./style.css";

// Counter using framework
createApp({
  state: 0,

  reducers: {
    add: (state, amount) => state + amount,
    remove: (state, amount) => state - amount,
  },

  view: (state, emit) =>
    h(
      "button",
      {
        on: { click: () => emit("add", 1) },
        className: ["first"],
      },
      [hString(state)]
    ),
}).mount(document.body);
