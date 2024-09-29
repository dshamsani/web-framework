import type { VDOM } from "./types/global";

import { destroyDOM } from "./destroy-dom";
import { mountDOM } from "./mount-dom";
import { Dispatcher } from "./dispatcher";
import { patchDOM } from "./patch-dom";

// Creates the application object
export const createApp = ({
  state,
  reducers = {},
  view,
}: {
  state: any;
  view: (state: any, emit: (eventName: string, payload: any) => void) => VDOM;
  reducers: {
    [key: string]: (state: any, payload: any) => void;
  };
}) => {
  let parentEl: HTMLElement | null = null;
  let vdom: VDOM | null = null;

  const dispatcher = new Dispatcher();

  // Rerenderes the application after every command
  const subscriptions = [dispatcher.afterEveryCommand(renderApp)];

  for (const actionName in reducers) {
    const reducer = reducers[actionName];

    const subs = dispatcher.subscribe(actionName, (payload) => {
      state = reducer(state, payload);
    });
    subscriptions.push(subs);
  }

  function emit(eventName: string, payload: any) {
    dispatcher.dispatch(eventName, payload);
  }

  // Renderes the app
  function renderApp() {
    const newVdom = view(state, emit);

    if (parentEl) {
      patchDOM(vdom, newVdom, parentEl);
    }
  }

  return {
    mount(_parentEl: HTMLElement) {
      parentEl = _parentEl;
      vdom = view(state, emit);
      mountDOM(vdom, parentEl);
    },

    unmount() {
      destroyDOM(vdom);
      vdom = null;
      subscriptions.forEach((unsubscribe) => unsubscribe());
    },
  };
};
