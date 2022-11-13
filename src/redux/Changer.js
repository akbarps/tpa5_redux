import { init_filter } from "../FilterVariable";

export const Changer = (store, visibilityFiler) => {
    switch(visibilityFiler) {
      case init_filter.COMPLETE:
        return store.todos.filter(todo => todo.status);
      case init_filter.INCOMPLETE:
        return store.todos.filter(todo => !todo.status);
      default:
        return store.todos;
    }
  }