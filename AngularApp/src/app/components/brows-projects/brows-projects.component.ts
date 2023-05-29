import { Component,OnInit,Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-brows-projects',
  templateUrl: './brows-projects.component.html',
  styleUrls: ['./brows-projects.component.css']
})
export class BrowsProjectsComponent implements OnInit {
  constructor(private authService: AuthService){}
  @Input() userProjects:any[]=[]
  ngOnInit(): void {
    this.authService.UserProjects().subscribe(req=>{
      this.userProjects=req.data
    })
    this.userProjects
  }
}
