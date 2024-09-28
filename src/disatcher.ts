type CommandHandler = (payload: any) => void;
type AfterHandler = () => void;

// Creating dispatcher class
export class Dispatcher {
  subs: Map<string, CommandHandler[]> = new Map();
  afterHandlers: AfterHandler[] = [];

  // Registers a handler function to respond to a command with a given name
  subscribe(commandName: string, handler: CommandHandler): () => void {
    // Creates the array of subscriptions if it doesn't exist for a given command name
    if (!this.subs.has(commandName)) {
      this.subs.set(commandName, []);
    }

    // Checks whether the handler is registered
    const handlers = this.subs.get(commandName)!;
    if (handlers.includes(handler)) {
      return () => {};
    }

    // Registers the handler
    handlers.push(handler);

    // Returns a function to unregister a handler (if needed)
    return () => {
      const idx = handlers.indexOf(handler);
      if (idx > -1) {
        handlers.splice(idx, 1);
      }
    };
  }

  // After every command handler function to notify framework about potential state changes
  afterEveryCommand(handler: AfterHandler): () => void {
    this.afterHandlers.push(handler);

    return () => {
      const idx = this.afterHandlers.indexOf(handler);
      if (idx > -1) {
        this.afterHandlers.splice(idx, 1);
      }
    };
  }

  // Dispatches a command and calls all the registered handlers.
  dispatch(commandName: string, payload?: any): void {
    if (this.subs.has(commandName)) {
      const handlers = this.subs.get(commandName)!;
      handlers.forEach((handler) => handler(payload));
    } else {
      console.warn(`No handlers for command ${commandName}`);
    }

    // Call all after handlers
    this.afterHandlers.forEach((handler) => handler());
  }
}
