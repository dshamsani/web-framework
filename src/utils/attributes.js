// Sets style to node element
export const setStyle = (el, prop, value) => {
  if (typeof value === "number") {
    el.style[prop] = value + "px";
    return;
  }

  el.style[prop] = value;
};

// Removes style from node element
export const removeStyle = (el, prop) => {
  el.style[prop] = null;
};

// Sets class to node element
export const setClass = (el, className) => {
  el.className = "";

  if (typeof className === "string") {
    el.className = className;
  }

  if (Array.isArray(className)) {
    el.classList.add(...className);
  }
};

// Removes attribute from node element
export const removeAttribute = (el, name) => {
  el[name] = null;
  el.removeAttribute(name);
};

// Sets attribute to node element
export const setAttribute = (el, name, value) => {
  if (value === null) {
    removeAttribute(el, name);
    return;
  }

  if (name.startsWith("data-")) {
    el.setAttribute(name, value);
    return;
  }

  el[name] = value;
};

// Sets attributes to node element
export const setAttributes = (el, attrs) => {
  const { class: className, style, ...restAttrs } = attrs;

  if (className) {
    setClass(el, className);
  }

  if (style) {
    Object.entries(style).forEach(([prop, value]) => {
      setStyle(el, prop, value);
    });
  }

  for (const [name, value] of Object.entries(restAttrs)) {
    setAttribute(el, name, value);
  }
};
