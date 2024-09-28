import type { NODE_ELEMENT, NODE_FRAGMENT, NODE_PROPS, NODE_TEXT, VDOM } from "./types/global";

import { DOM_TYPES } from "./h";
import { setAttributes } from "./utils/attributes";
import { addEventListeners } from "./utils/events";

/**
 * @description Creates each DOM node for the virtual DOM
 * @argument vdom - Virtual Dom object
 * @argument parentEl - root element to atach Virtual Dom
 */
export const mountDOM = (vdom: VDOM, parentEl: HTMLElement | null) => {
  if (!vdom) {
    return;
  }

  switch (vdom.type) {
    case DOM_TYPES.TEXT: {
      createTextNode(vdom, parentEl);
      break;
    }

    case DOM_TYPES.ELEMENT: {
      createElementNode(vdom, parentEl);
      break;
    }

    case DOM_TYPES.FRAGMENT: {
      createFragmentNodes(vdom, parentEl);
      break;
    }

    default: {
      throw new Error(`Can't mount DOM`);
    }
  }
};

// Adding listeners and attributes to node element & set listneres to vdom node
const addProps = (el: HTMLElement, props: NODE_PROPS, vdom: NODE_ELEMENT) => {
  const { on: events, ...attrs } = props;

  vdom.listeners = addEventListeners(events, el);
  setAttributes(el, attrs);
};

// Creates Fragment Nodes
function createFragmentNodes(vdom: NODE_FRAGMENT, parentEl: HTMLElement | null) {
  const { children } = vdom;
  vdom.el = parentEl;

  children.forEach((child) => mountDOM(child, parentEl));
}

// Creates element node
function createElementNode(vdom: NODE_ELEMENT, parentEl: HTMLElement | null) {
  const { tag, props, children } = vdom;

  const element = document.createElement(tag);
  addProps(element, props, vdom);
  vdom.el = element;

  children.forEach((child) => mountDOM(child, element));

  if (parentEl) {
    parentEl.append(element);
  }
}

// Creates text node
function createTextNode(vdom: NODE_TEXT, parentEl: HTMLElement | null) {
  const { value } = vdom;

  const textNode = document.createTextNode(value);
  vdom.el = textNode;

  if (parentEl) {
    parentEl.append(textNode);
  }
}
