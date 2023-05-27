import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  user = new User();

  constructor(private authService: AuthService, private router: Router){}

  register(user:User){
    this.authService.register(user).subscribe((data)=>{
    });
  }
  login(user:User){
    this.authService.login(user).subscribe((response)=>{
      localStorage.setItem("authToken",response.data);
    })
  }
  getAllProjects(){
    this.authService.getAllProjects().subscribe((res)=>{
      console.log(res.data);

    })
  }
}
