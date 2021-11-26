export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
};


export interface Task {
  id: string,
  name: string,
  description: string,
  dueData: Date,
  tags: [],
  done: boolean,
  priority: TaskPriority,
  user_id: string
}

