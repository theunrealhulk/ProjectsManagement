import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-brows-assignments',
  templateUrl: './brows-assignments.component.html',
  styleUrls: ['./brows-assignments.component.css']
})
export class BrowsAssignmentsComponent implements OnInit {
  constructor(private authService: AuthService){}
  @Input() allAssignments:any[]=[]
  ngOnInit(): void {

    this.authService.AllAssignments().subscribe(req=>{
      this.allAssignments=req.data
    })
  }
}
