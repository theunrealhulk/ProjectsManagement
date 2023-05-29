// interfaces.ts
export interface Project {
  id: number;
  name: string;
  dueDate: string;
  createdAt: string;
  userId: number;
  updatedAt: string;
  assignments: Assignment[];
  username: string;
}

export interface Assignment {
  id: number;
  title: string;
  description: string;
  projectId: number;
  status: string;
  userId: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  projectName:string
}

export interface User {
  id: number;
  userName: string;
}
