import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../entities/api.class';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  api_url:string = Api.URL+'notification';

  constructor(private http: HttpClient) { }

  postNotification(notification){
    return this.http.post(this.api_url,notification);
  }

  fetchNotification(){
    return this.http.get(this.api_url);
  }
}
