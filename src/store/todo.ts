export interface Todo {
  readonly name: string;
  readonly status: "done" | "cancel" | "todo";
}
