import { h } from "../runtime/src/h.js";
import { mountDOM } from "../runtime/src/mount-dom.js";

const vdom = h(
  "div",
  {
    on: {
      click: () => console.log("MAMA MIA"),
    },
    style: {
      fontSize: 24,
      color: "red",
    },
    class: ["hello", "from", "framework"],
    title: "hahaha",
  },
  [h("span", {}, ["Hello"]), h("span", {}, ["World"])]
);

mountDOM(vdom, document.body);
