import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL:string="http://localhost:8090/login"
  constructor(private http:HttpClient) { }

  loginUser(user:User):Observable<object> {
    console.log(user);
    return this.http.post(this.URL,user);
  }
}
