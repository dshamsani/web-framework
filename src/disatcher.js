// Creating dispatcher class

export class Dispatcher {
  #subs = new Map();

  // Registers a handler function, to respond command with given name
  subscribe(commandName, handler) {
    // Creates the array of subscriptions if it doesn't exist for a given command name
    if (!this.#subs.has(commandName)) {
      this.#subs.set(commandName, []);
    }

    // Checks whether the handler is registered
    const handlers = this.#subs.get(commandName);
    if (handlers.includes(handler)) {
      return () => {};
    }

    // Registers the handler
    handlers.push(handler);

    // Returns a function to unregister a handler (if need)
    return () => {
      const idx = handlers.indexOf(handler);
      handlers.splice(idx, 1);
    };
  }
}
