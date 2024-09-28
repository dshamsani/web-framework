import { createApp } from "./framework/app";
import { h, hString } from "./framework/h";

// Counter using framework
createApp({
  state: 0,

  reducers: {
    add: (state, amount) => state + amount,
  },

  view: (state, emit) =>
    h(
      "button",
      {
        on: { click: () => emit("add", 1) },
      },
      [hString(state)]
    ),
}).mount(document.body);
