import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url:string = 'https://localhost:7032/api';

  constructor(private http:HttpClient,private helper: JwtHelperService) { }
  public register(user:User):Observable<any>{
    return this.http.post<any>(`${this.url}/Auth/register`,user)
  }
  public login(user:User):Observable<any>{
    return this.http.post<any>(`${this.url}/Auth/login`,user);
  }
  public AllProjects():Observable<any>{
    return this.http.get<any>(`${this.url}/Project/AllProjects`,{});
  }
  public AllAssignments():Observable<any>{
    return this.http.get<any>(`${this.url}/Project/AllAssignments`,{});
  }
  public UserAssignments(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/Project/UserAssignment/${id}`,{});
  }
  public UserProjects():Observable<any>{
    return this.http.get<any>(`${this.url}/Project/UserProjects`,{});
  }
  public Users(){
    return this.http.get<any>(`${this.url}/Project/AllUsers`,{});
  }
  public saveProject(project:any):Observable<any>{
    return this.http.post<any>(`${this.url}/Project/AddProject`,project);
  }

  public logout(){
    localStorage.removeItem('authToken');
  }
  public isLoggedIn(){
    return localStorage.getItem('authToken')!=null;
  }
  public getConnectedUserId(): string | null {
    const authToken = localStorage.getItem('authToken');
    if (authToken !== null) {
      return this.helper.decodeToken(authToken).nameid;
    }
    return null;
  }
}
