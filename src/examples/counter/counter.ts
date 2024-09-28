import type { FC } from "../../framework/types/global";

import { h, hFragment, hString } from "../../framework/h";

import "./counter.css";

export const Counter: FC = (state, emit) => {
  return hFragment([
    h(
      "p",
      {
        className: "counter",
      },
      [hString(state)]
    ),
    h(
      "button",
      {
        on: { click: () => emit("add", 1) },
        className: ["btn__inc"],
      },
      [hString("Increment!")]
    ),
    h(
      "button",
      {
        on: { click: () => emit("remove", 1) },
        className: ["btn__dec"],
      },
      [hString("Decrement!")]
    ),
  ]);
};
