import type { DOM_TYPES_TYPE, hFunction, HTML_TAGS } from "./types/h.types.js";
import { withoutNulls } from "./utils/array";

// Define constant for each type of Virtual Node
export const DOM_TYPES: DOM_TYPES_TYPE = {
  TEXT: "text", // Text Nodes
  ELEMENT: "element", // Element Nodes
  FRAGMENT: "fragment", // Fragment Nodes
};

// Transforms strings into text virtual nodes
const mapTextNodes = (children) => children.map((child) => (typeof child === "string" ? hString(child) : child));

// Creates fragment virtual nodes
export const hFragment = (vNodes) => ({ type: DOM_TYPES.FRAGMENT, children: mapTextNodes(withoutNulls(vNodes)) });

// Creates text virtual nodes from strings
export const hString = (str: string) => ({ type: DOM_TYPES.TEXT, value: str });

/** 

    Function to create element Nodes
    @argument tag - The element's tag name
    @argument props - An object with its attributes (props === propreties)
    @argument children - An array of child nodes 
    
    @returns Virtual node object passed-in tag name, props, children

*/
export const h: hFunction = (tag: HTML_TAGS, props = {}, children = []) => {
  return {
    tag,
    props,
    type: DOM_TYPES.ELEMENT,
    children: mapTextNodes(withoutNulls(children)),
  };
};
