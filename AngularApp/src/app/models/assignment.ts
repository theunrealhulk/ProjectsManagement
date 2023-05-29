export class Assignment {
  createdAt: string;
  description: string;
  dueDate: string;
  id: string;
  projectId: string;
  status: string;
  title: string;
  updatedAt: string;
  userId: string;

  constructor(
    createdAt: string,
    description: string,
    dueDate: string,
    id: string,
    projectId: string,
    status: string,
    title: string,
    updatedAt: string,
    userId: string
  ) {
    this.createdAt = createdAt;
    this.description = description;
    this.dueDate = dueDate;
    this.id = id;
    this.projectId = projectId;
    this.status = status;
    this.title = title;
    this.updatedAt = updatedAt;
    this.userId = userId;
  }
}
