import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user = new User();

  constructor(private authService: AuthService){}

  register(user:User){
    this.authService.register(user).subscribe((data)=>{
    });
  }
  login(user:User){
    this.authService.login(user).subscribe((response)=>{
      localStorage.setItem("authToken",response.data);
    })
  }
  logout(){
    this.authService.logout();
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
  getAllProjects(){
    this.authService.getAllProjects().subscribe((res)=>{
      console.log(res.data);
    })
  }
}
