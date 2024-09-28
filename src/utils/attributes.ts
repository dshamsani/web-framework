// Sets style to node element
export const setStyle = (el: HTMLElement, prop: string, value: string | number) => {
  if (typeof value === "number") {
    (el.style as any)[prop] = value + "px";
    return;
  }

  (el.style as any)[prop] = value;
};

// Removes style from node element
export const removeStyle = (el: HTMLElement, prop: string) => {
  (el.style as any)[prop] = null;
};

// Sets class to node element
export const setClass = (el: HTMLElement, className: string | string[]) => {
  el.className = "";

  if (typeof className === "string") {
    el.className = className;
  }

  if (Array.isArray(className)) {
    el.classList.add(...className);
  }
};

// Removes attribute from node element
export const removeAttribute = (el: HTMLElement, name: string) => {
  (el as any)[name] = null;
  el.removeAttribute(name);
};

// Sets attribute to node element
export const setAttribute = (el: HTMLElement, name: string, value: string) => {
  if (value === null) {
    removeAttribute(el, name);
    return;
  }

  if (name.startsWith("data-")) {
    el.setAttribute(name, value);
    return;
  }

  (el as any)[name] = value;
};

// Sets attributes to node element
export const setAttributes = (el: HTMLElement, attrs: { [key: string]: string }) => {
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
