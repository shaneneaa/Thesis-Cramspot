import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../entities/api.class';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  postFeed(feed){
    return this.http.post(Api.URL+'feed',feed);
  }

  getFeed(){
    return this.http.get(Api.URL+'feed');
  }
}
