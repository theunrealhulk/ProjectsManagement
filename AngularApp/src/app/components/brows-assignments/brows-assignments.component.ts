import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataRepositoryService } from 'src/app/services/data-repository.service';

@Component({
  selector: 'app-brows-assignments',
  templateUrl: './brows-assignments.component.html',
  styleUrls: ['./brows-assignments.component.css']
})
export class BrowsAssignmentsComponent implements OnInit {
  allAssignments:any[]=[]
  constructor(private authService: AuthService,private dataRepo: DataRepositoryService){}
  ngOnInit(): void {
    this.allAssignments = this.dataRepo.allAssignments;

  }
}
