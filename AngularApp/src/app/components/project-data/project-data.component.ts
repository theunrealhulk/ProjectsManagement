import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent {
  constructor(private authService: AuthService){}
  title='Projects'
project={
  name:"",
  duedate:''
}

save(){
  this.authService.saveProject(this.project).subscribe(res =>{
    console.log(res.data);
  })
}
}
