import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit  {
  user = new User();

  constructor(private authService: AuthService,private snackBar :MatSnackBar){}
  formValid(user:User){
    if(user.username.length > 0 && user.password.length > 0){
      return true;
    }
    return false;
  }
  register(user:User){
    if(this.formValid(user))
      this.authService.register(user).subscribe((req)=>{
        console.log(req);

        if(req.success){
          this.snackBar.open('Successfully registered', 'Dismiss', {
            duration: 5000, // Duration in milliseconds
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        }

      },(error)=>{
          this.snackBar.open('Register Fail (user already exist)', 'Dismiss', {
            duration: 3000, // Duration in milliseconds
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
      });
  }
  login(user:User){
    if(this.formValid(user))
    this.authService.login(user).subscribe((response)=>{
      localStorage.setItem("authToken",response.data);
      window.location.href="/dashboard";
    },(error)=>{
      this.snackBar.open("Login Fail", 'Dismiss', {
        duration: 3000, // Duration in milliseconds
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    })
  }
  logout(){
    this.authService.logout();
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }


  ngOnInit(){
    if(this.isLoggedIn()){
      window.location.href="/dashboard";
    }

  }
}
