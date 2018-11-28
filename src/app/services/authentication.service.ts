import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "../entities/api.class";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signUp(user){
    return this.http.post(Api.URL+'signup',user);
  }

  login(user){
    return this.http.post(Api.URL+'login',user);
  }

  isLogged():boolean{
    return !!localStorage.getItem('token');
  }
}
