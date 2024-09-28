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

interface ELEMENT_NODE_PROPS {
  [key: string]: any;
}

export interface ELEMENT_NODE {
  tag: HTML_TAGS;
  props: ELEMENT_NODE_PROPS;
  type: keyof DOM_TYPES_TYPE;
  children: ELEMENT_NODE[];
}

export interface ELEMENT_TEXT {
  type: "text";
  value: string;
}

export type hFunction = (
  tag: HTML_TAGS,
  props: ELEMENT_NODE_PROPS,
  children: ELEMENT_NODE[]
) => {
  type: "element";
  tag: HTML_TAGS;
  props: ELEMENT_NODE_PROPS;
  children: ELEMENT_NODE[];
};
