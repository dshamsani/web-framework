// import { destroyDOM } from "../src/destroy-dom.js";
// import { Dispatcher } from "../src/disatcher.js";
import { h } from "../src/h.js";
import { mountDOM } from "../src/mount-dom.js";

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
