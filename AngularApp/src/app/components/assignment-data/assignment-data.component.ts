import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-assignment-data',
  templateUrl: './assignment-data.component.html',
  styleUrls: ['./assignment-data.component.css']
})
export class AssignmentDataComponent {
  constructor(private authService: AuthService){}
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
