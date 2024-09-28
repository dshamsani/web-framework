export type DOM_TYPES_TYPE = {
  TEXT: "text";
  ELEMENT: "element";
  FRAGMENT: "fragment";
};

export type HTML_TAGS =
  | "a"
  | "abbr"
  | "address"
  | "area"
  | "article"
  | "aside"
  | "audio"
  | "b"
  | "base"
  | "bdi"
  | "bdo"
  | "blockquote"
  | "body"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "cite"
  | "code"
  | "col"
  | "colgroup"
  | "data"
  | "datalist"
  | "dd"
  | "del"
  | "details"
  | "dfn"
  | "dialog"
  | "div"
  | "dl"
  | "dt"
  | "em"
  | "embed"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "footer"
  | "form"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "head"
  | "header"
  | "hgroup"
  | "hr"
  | "html"
  | "i"
  | "input"
  | "iframe"
  | "img"
  | "ins"
  | "kbd"
  | "label"
  | "legend"
  | "li"
  | "link"
  | "main"
  | "map"
  | "mark"
  | "menu"
  | "meta"
  | "meter"
  | "nav"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "output"
  | "p"
  | "param"
  | "picture"
  | "pre"
  | "progress"
  | "q"
  | "rp"
  | "rt"
  | "ruby"
  | "s"
  | "samp"
  | "script"
  | "search"
  | "section"
  | "select"
  | "select"
  | "small"
  | "source"
  | "span"
  | "strong"
  | "style"
  | "sub"
  | "summary"
  | "sup"
  | "svg"
  | "table"
  | "tbody"
  | "td"
  | "template"
  | "textare"
  | "tfoot"
  | "th"
  | "thead"
  | "time"
  | "title"
  | "tr"
  | "track"
  | "u"
  | "ul"
  | "var"
  | "video"
  | "wbr";

export interface NODE_PROPS {
  [key: string]: any;
}

export interface NODE_LISTENERS {
  [eventName: string]: () => void;
}

export interface NODE_ELEMENT {
  type: "element";
  tag: HTML_TAGS;
  props: NODE_PROPS;
  children: (NODE_ELEMENT | NODE_TEXT | NODE_FRAGMENT)[];
  el?: HTMLElement | Text | null;
  listeners?: NODE_LISTENERS;
}

export interface NODE_FRAGMENT {
  type: "fragment";
  children: (NODE_TEXT | NODE_ELEMENT)[];
  el?: HTMLElement | Text | null;
}

export interface NODE_TEXT {
  type: "text";
  value: string;
  el?: Text | null;
}

export type VDOM = NODE_TEXT | NODE_FRAGMENT | NODE_ELEMENT | null;

export type FC = (state: any, emit: (eventName: string, payload: any) => void) => VDOM;
