import { APP_KEY_TODO_LIST } from "@/constants";
import { Todo } from "@/types";
import { LocalStorage } from ".";

export function TodoStorage() {
  return {
    getList() {
      return LocalStorage.getValue<readonly Todo[]>(APP_KEY_TODO_LIST);
    },
    setList(todoList: readonly Todo[]) {
      LocalStorage.setValue<readonly Todo[]>(APP_KEY_TODO_LIST, todoList);
    },
    removeKey() {
      LocalStorage.remove(APP_KEY_TODO_LIST);
    },
  };
}
