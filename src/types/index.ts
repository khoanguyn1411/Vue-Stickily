export enum TaskStatus {
  All = "All tasks",
  Todo = "Todo",
  Done = "Done",
  Cancel = "Cancel",
}

export function getObjectTaskStatus(): { [key in TaskStatus]: TaskStatus } {
  let task = {};
  Object.entries(TaskStatus).forEach(([value, key]) => {
    task = { ...task, [key]: value };
  });
  return task as { [key in TaskStatus]: TaskStatus };
}

export interface Todo {
  readonly name: string;
  readonly id: number;
  readonly status: Omit<TaskStatus, TaskStatus.All>;
}
