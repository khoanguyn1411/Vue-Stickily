export enum TaskStatus {
  All = "All tasks",
  Todo = "Todo",
  Done = "Done",
  Cancel = "Cancel",
}

export function getObjectTaskStatus(): {
  [key in keyof typeof TaskStatus]: TaskStatus;
} {
  let task = {};
  Object.entries(TaskStatus).forEach(([key, value]) => {
    task = { ...task, [key]: value };
  });
  return task as { [key in keyof typeof TaskStatus]: TaskStatus };
}

export interface Todo {
  readonly name: string;
  readonly id: number;
  readonly status: Omit<TaskStatus, TaskStatus.All>;
}
