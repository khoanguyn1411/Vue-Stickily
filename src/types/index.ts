export enum TaskStatus {
  All = "All tasks",
  Todo = "Todo",
  Done = "Done",
  Cancel = "Cancel",
}

export interface Todo {
  readonly name: string;
  readonly id: number;
  readonly status: Omit<TaskStatus, TaskStatus.All>;
}
