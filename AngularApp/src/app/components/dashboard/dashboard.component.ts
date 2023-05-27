import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService,private snakBar :MatSnackBar){}
  logout(){
    this.authService.logout();
    window.location.reload();
  }
  ngOnInit(){
    console.log('checking iof user already logged in');
    console.log(this.authService);

    if(!this.authService.isLoggedIn()) {
      window.location.href="/login";
    }
  }
}
