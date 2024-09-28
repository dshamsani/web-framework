import type { NODE_ELEMENT, NODE_FRAGMENT, NODE_TEXT, VDOM } from "./types/global";

import { DOM_TYPES } from "./h";
import { removeEventListeners } from "./utils/events";

export const destroyDOM = (vdom: VDOM | null) => {
  if (!vdom?.type) {
    return;
  }

  const { type } = vdom;

  switch (type) {
    case DOM_TYPES.TEXT: {
      removeTextNode(vdom);
      break;
    }

    case DOM_TYPES.ELEMENT: {
      removeElementNode(vdom);
      break;
    }

    case DOM_TYPES.FRAGMENT: {
      removeFragmentNodes(vdom);
      break;
    }

    default: {
      throw new Error(`Can't destroy DOM of type: ${type}`);
    }
  }

  delete vdom.el;
};

function removeTextNode(vdom: NODE_TEXT) {
  const { el } = vdom;

  if (el) {
    el.remove();
  }
}

function removeElementNode(vdom: NODE_ELEMENT) {
  const { el, children, listeners } = vdom;

  if (listeners && el) {
    removeEventListeners(listeners, el as HTMLElement);
    delete vdom.listeners;
  }

  children.forEach(destroyDOM);

  if (el) {
    el.remove();
  }
}

function removeFragmentNodes(vdom: NODE_FRAGMENT) {
  const { children } = vdom;
  children.forEach(destroyDOM);
}
