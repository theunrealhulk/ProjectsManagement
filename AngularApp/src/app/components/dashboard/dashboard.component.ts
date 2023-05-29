import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDataComponent } from '../project-data/project-data.component';
import { BrowsProjectsComponent } from '../brows-projects/brows-projects.component';
import { BrowsAssignmentsComponent } from '../brows-assignments/brows-assignments.component';
import { forkJoin } from 'rxjs';
import { Assignment, Project, User } from 'src/app/interfaces/all';
import { DataRepositoryService} from 'src/app/services/data-repository.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allAssignment: Assignment[] = [];
  allProjects: Project[] = [];
  userAssignment: Assignment[] = [];
  userProjects: Project[] = [];
  // Categorize projects based on their due dates
  overDues: Project[] = [];
  toDays: Project[] = [];
  thisWeek: Project[] = [];
  today = new Date();
  overDuesAssignment: Assignment[] = [];
  toDaysAssignment: Assignment[] = [];
  thisWeekAssignment: Assignment[] = [];
  users: User[] = [];

  constructor(
    private authService: AuthService,
    private snakBar: MatSnackBar,
    private matdialog: MatDialog,
    private dataRepo:DataRepositoryService,

  ) {}
  // Getter method for accessing dataRepo property
  getDataRepo(): DataRepositoryService {
    return this.dataRepo;
  }
  logout() {
    this.authService.logout();
    window.location.href="/login";
  }


  ngOnInit() {
    const userProjects$ = this.authService.UserProjects();
    const users$ = this.authService.Users();
    const userAssignments$ = this.authService.UserAssignments(this.authService.getConnectedUserId());
    const allProjects$ = this.authService.AllProjects();
    const allAssignments$ = this.authService.AllAssignments();

    forkJoin([userProjects$, users$, userAssignments$, allProjects$, allAssignments$]).subscribe(
      ([userProjectsRes, usersRes, userAssignmentsRes, allProjectsRes, allAssignmentsRes]) => {
        this.dataRepo.userProjects = userProjectsRes.data;
        this.dataRepo.users = usersRes.data;
        this.dataRepo.userAssignments = userAssignmentsRes.data;
        this.dataRepo.allProjects = allProjectsRes.data;
        this.dataRepo.allAssignments = allAssignmentsRes.data;

        this.matchUsers(this.dataRepo.userProjects);
        this.matchUsers(this.dataRepo.allProjects);
        this.matchUsers(this.dataRepo.allAssignments);
        this.matchProject(this.dataRepo.allAssignments);
        this.matchUsers(this.dataRepo.userAssignments);
        this.matchProject(this.dataRepo.userAssignments);
        console.log(this.dataRepo.userAssignments);
        console.log(this.dataRepo.allAssignments);

        let { toDays, overDues, thisWeek } = this.categorizeProjects(this.dataRepo.allProjects);
        this.dataRepo.toDays = toDays;
        this.dataRepo.overDues = overDues;
        this.dataRepo.thisWeek = thisWeek;

        const { toDays: toDaysA, overDues: overDuesA, thisWeek: thisWeekA } = this.categorizeProjects(
          this.dataRepo.allAssignments
        );
        this.dataRepo.toDaysAssignment = toDaysA;
        this.dataRepo.overDuesAssignment = overDuesA;
        this.dataRepo.thisWeekAssignment = thisWeekA;

        // Assign allProjects to BrowsProjectsComponent input
        this.allProjects = this.dataRepo.allProjects;
        this.allAssignment = this.dataRepo.allAssignments;


        if (!this.authService.isLoggedIn()) {
          window.location.href = '/login';
        }
      }
    );
  }
  categorizeProjects<T extends Project | Assignment>(data: T[]): { overDues: T[], toDays: T[], thisWeek: T[] } {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    const overDues: T[] = [];
    const toDays: T[] = [];
    const thisWeek: T[] = [];

    data.forEach((element) => {
      const dueDate = new Date(element.dueDate);

      if (dueDate < today) {
        overDues.push(element);
      } else if (dueDate.toDateString() === today.toDateString()) {
        toDays.push(element);
      } else if (dueDate > today && dueDate <= nextWeek) {
        thisWeek.push(element);
      }
    });

    return { overDues, toDays, thisWeek };
  }


  matchUsers(data: (Project[] | Assignment[])) {
    if (data.length > 0) {
      data.forEach((element: Project | Assignment) => {
        const user = this.dataRepo.users.find((user: User) => user.id === element.userId);
        if (user) {
          element.username = user.userName;
        }
      });
    }
  }
  matchProject(data:Assignment[])
  {
    if (data.length > 0) {
      data.forEach((element: Assignment) => {
        const project = this.dataRepo.allProjects.find((project: Project) => project.id === element.projectId);
        if (project) {
          element.projectName = project.name;
        }
      });
  }}
  openNewProjectDialog() {
    this.matdialog.open(ProjectDataComponent);
  }

  openAllProjectDialog() {
    this.matdialog.open(BrowsProjectsComponent);
  }

  openAllAssignments() {
    this.matdialog.open(BrowsAssignmentsComponent);
  }

}
