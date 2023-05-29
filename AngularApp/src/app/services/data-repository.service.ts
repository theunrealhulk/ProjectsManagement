import { Injectable } from '@angular/core';
import { Assignment, Project, User } from '../interfaces/all'

@Injectable({
  providedIn: 'root'
})
export class DataRepositoryService {
  userProjects: Project[] = [];
  users: User[] = [];
  userAssignments: Assignment[] = [];
  allProjects: Project[] = [];
  allAssignments: Assignment[] = [];
  overDues: Project[] = [];
  toDays: Project[] = [];
  thisWeek: Project[] = [];
  overDuesAssignment: Assignment[] = [];
  toDaysAssignment: Assignment[] = [];
  thisWeekAssignment: Assignment[] = [];
}
