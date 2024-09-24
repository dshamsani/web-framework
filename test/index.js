import { h } from "../runtime/src/h.js";
import { mountDOM } from "../runtime/src/mount-dom.js";

const vdom = h("div", {}, [h("span", {}, ["Hello"]), h("span", {}, ["World"])]);

mountDOM(vdom, document.body);
