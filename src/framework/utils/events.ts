import type { NODE_LISTENERS } from "../framework/types/global";

export const addEventListener = (eventName: string, handler: () => void, el: HTMLElement) => el.addEventListener(eventName, handler);

// Adding event listeners to an element node
export const addEventListeners = (listeners: NODE_LISTENERS, el: HTMLElement) => {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    addEventListener(eventName, handler, el);
  });

  return listeners;
};

// Removing event listeners
export const removeEventListeners = (listeners: NODE_LISTENERS, el: HTMLElement) => {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    console.log("Object.entries  handler:", el);
    el.removeEventListener(eventName, handler);
  });
};
