import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  constructor(private authService: AuthService){}

  ngOnInit(){
    console.log('checking iof user already logged in');
    console.log(this.authService);

    if(this.authService.isLoggedIn()) {
      window.location.href="/dashboard";
    }
    else{
      window.location.href="/login";
    }

  }
}
