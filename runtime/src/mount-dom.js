import { DOM_TYPES } from "./h.js";
import { setAttributes } from "./utils/attributes.js";
import { addEventListeners } from "./utils/events.js";

/**
 * @description Creates each DOM node for the virtual DOM
 * @argument vdom - Virtual Dom object
 * @argument parentEl - root element to atach Virtual Dom
 */
export const mountDOM = (vdom, parentEl) => {
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
      throw new Error(`Can't mount DOM of type: ${vdom.type}`);
    }
  }
};

// Adding listeners and attributes to node element & set listneres to vdom node
const addProps = (el, props, vdom) => {
  const { on: events, ...attrs } = props;

  vdom.listeners = addEventListeners(events, el);
  setAttributes(el, attrs);
};

// Creates Fragment Nodes
function createFragmentNodes(vdom, parentEl) {
  const { children } = vdom;
  vdom.el = parentEl;

  children.forEach((child) => mountDOM(child, parentEl));
}

// Creates element node
function createElementNode(vdom, parentEl) {
  const { tag, props, children } = vdom;

  const element = document.createElement(tag);
  addProps(element, props, vdom);
  vdom.el = element;

  children.forEach((child) => mountDOM(child, element));
  parentEl.append(element);
}

// Creates text node
function createTextNode(vdom, parentEl) {
  const { value } = vdom;

  const textNode = document.createTextNode(value);
  vdom.el = textNode;

  parentEl.append(textNode);
}
