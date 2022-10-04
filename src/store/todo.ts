import { TaskStatus } from "@/types";

export interface Todo {
  readonly name: string;
  readonly status: Omit<TaskStatus, TaskStatus.All>;
}
