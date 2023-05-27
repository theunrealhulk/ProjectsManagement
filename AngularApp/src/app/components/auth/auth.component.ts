import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {
  user = new User();

  constructor(private authService: AuthService){}
  formValid(user:User){
    if(user.username.length > 0 && user.password.length > 0){
      return true;
    }
    return false;
  }
  register(user:User){
    if(this.formValid(user))
      this.authService.register(user).subscribe((data)=>{});
  }
  login(user:User){
    if(this.formValid(user))
    this.authService.login(user).subscribe((response)=>{
      localStorage.setItem("authToken",response.data);
      window.location.href="/dashboard";
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

  ngOnInit(){
    console.log('checking iof user already logged in');

    if(this.isLoggedIn()){

      window.location.href="/dashboard";
    }

  }
}
