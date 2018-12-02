import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../entities/api.class';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  postWorkspace(workspace){
    return this.http.post(Api.URL+"workspace",workspace);
  }

  getWorkspace(){
    return this.http.get(Api.URL+'workspace');
  }

}
