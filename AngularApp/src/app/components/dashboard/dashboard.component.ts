import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { AssignmentDataComponent } from '../assignment-data/assignment-data.component';
import { ProjectDataComponent } from '../project-data/project-data.component';
import { BrowsProjectsComponent } from '../brows-projects/brows-projects.component';
import { BrowsAssignmentsComponent } from '../brows-assignments/brows-assignments.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allAssignment:Assignment[] = [];
  allProjects:Project[] = [];
  userAssignment:Assignment[] = [];
  userProjects: Project[] = [];
// Categorize projects based on their due dates
 overDues: Project[] = [];
 toDays: Project[] = [];
 thisWeek: Project[] = [];
 today = new Date();
 overDuesAssignment: Assignment[] = [];
 toDaysAssignment: Assignment[] = [];
 thisWeekAssignment: Assignment[] = [];

  constructor(private authService: AuthService,private snakBar :MatSnackBar,private matdialog:MatDialog){ }


  logout(){
    this.authService.logout();
    window.location.reload();
  }
  UserProjects()
  {
    this.authService.UserProjects().subscribe(res =>{
      // console.log("User Projects");
      // console.log(res.data);
      this.userProjects = res.data;
    })
  }
  UserAssignments(){
    let id=this.authService.getConnectedUserId()
    this.authService.UserAssignments(id).subscribe(res =>{
      // console.log("User Assignments");
      // console.log(res.data);
      this.userAssignment =  res.data
    })
  }
  AllProjects()
  {
    this.authService.AllProjects().subscribe(res =>{
      // console.log("Projects");
      // console.log(res.data);
      this.allProjects= res.data
      this.allProjects.forEach((project) => {
        const dueDate = new Date(project.dueDate);

        // Compare the due date with today's date
        if (dueDate < this.today) {
          this.overDues.push(project);
        } else if (dueDate.toDateString() === this.today.toDateString()) {
          this.toDays.push(project);
        } else if (dueDate > this.today && dueDate <= new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7)) {
          this.thisWeek.push(project);
        }
      });
      //
    })
  }
  AllAssignments(){
    this.authService.AllAssignments().subscribe(res =>{
      // console.log("assignments");
      // console.log(res.data);
      this.allAssignment = res.data
      this.allAssignment.forEach((assignment) => {
        const dueDate = new Date(assignment.dueDate);

        // Compare the due date with today's date
        if (dueDate < this.today) {
          this.overDuesAssignment.push(assignment);
        } else if (dueDate.toDateString() === this.today.toDateString()) {
          this.toDaysAssignment.push(assignment);
        } else if (dueDate > this.today && dueDate <= new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 7)) {
          this.thisWeekAssignment.push(assignment);
        }
      });
    })
  }
  openNewProjectDialog(){
    this.matdialog.open(ProjectDataComponent)
  }
  openAllProjectDialog(){
    this.matdialog.open(BrowsProjectsComponent)
  }
  openAllAssignments(){
    this.matdialog.open(BrowsAssignmentsComponent)
  }
  ngOnInit(){
    this.UserAssignments();
    this.UserProjects();
    this.AllProjects();
    this.AllAssignments()

    if(!this.authService.isLoggedIn()) {
      window.location.href="/login";
    }
  }
}
interface Project {
  id: number;
  name: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  assignments: Assignment[];
}

interface Assignment {
  id: number;
  title: string;
  description: string;
  projectId: number;
  status: string;
  userId: number;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}
