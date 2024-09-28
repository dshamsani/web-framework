import type { FC } from "./framework/types/global";

import { Counter } from "./examples/counter/counter";

import "./normalize.css";

export const App: FC = (state, eventName) => {
  // Counter
  return Counter(state, eventName);
};
