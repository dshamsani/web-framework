export const addEventListener = (eventName, handler, el) => el.addEventListener(eventName, handler);

// Adding event listeners to an element node
export const addEventListeners = (listeners = {}, el) => {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    addEventListener(eventName, handler, el);
  });

  return listeners;
};

// Removing event listeners
export const removeEventListeners = (listeners = {}, el) => {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    console.log("Object.entries  handler:", el);
    el.removeEventListener(eventName, handler);
  });
};
