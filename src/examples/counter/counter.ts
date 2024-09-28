import type { FC } from "../../framework/types/global";

import { h, hFragment, hString } from "../../framework/h";

export const Counter: FC = (state, emit) => {
  return hFragment([
    h("p", {}, [hString(state)]),
    h(
      "button",
      {
        on: { click: () => emit("add", 1) },
        className: ["first"],
      },
      [hString("Increment!")]
    ),
    h(
      "button",
      {
        on: { click: () => emit("remove", 1) },
        className: ["first"],
      },
      [hString("Decrement!")]
    ),
  ]);
};
