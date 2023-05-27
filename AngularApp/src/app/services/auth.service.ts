import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string = 'https://localhost:7032/api';

  constructor(private http:HttpClient) { }
  public register(user:User):Observable<any>{
    return this.http.post<any>(`${this.url}/Auth/register`,user);
  }
  public login(user:User):Observable<any>{
    return this.http.post<any>(`${this.url}/Auth/login`,user);
  }
  public getAllProjects():Observable<any>{
    return this.http.get<any>(`${this.url}/Project/AllProjects`,{});
  }
  public logout(){
    localStorage.removeItem('authToken');
  }
  public isLoggedIn(){
    return localStorage.getItem('authToken')!=null;
  }
}
