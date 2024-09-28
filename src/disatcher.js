// Creating dispatcher class

export class Dispatcher {
  #subs = new Map();
  #afterHandlers = [];

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

  // after every command handler function to notify framework about potential state changes
  afterEveryCommand(handler) {
    this.#afterHandlers.push(handler);

    return () => {
      const idx = this.#afterHandlers.indexOf(handler);
      this.#afterHandlers.splice(idx, 1);
    };
  }
}
