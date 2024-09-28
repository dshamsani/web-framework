import { destroyDOM } from "./destroy-dom.js";
import { mountDOM } from "./mount-dom.js";
import { Dispatcher } from "./disatcher.js";

// Creates the application object
export const createApp = ({ state, view, reducers = {} }) => {
  let parentEl = null;
  let vdom = null;

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

  function emit(eventName, payload) {
    dispatcher.dispatch(eventName, payload);
  }

  // Renderes the app
  function renderApp() {
    if (vdom) {
      destroyDOM(vdom);
    }

    vdom = view(state, emit);
    mountDOM(vdom, parentEl);
  }

  return {
    mount(_parentEl) {
      parentEl = _parentEl;
      renderApp();
    },

    unmount() {
      destroyDOM(vdom);
      vdom = null;
      subscriptions.forEach((unsubscribe) => unsubscribe());
    },
  };
};
